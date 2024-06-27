import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";

import { PiImageThin } from "react-icons/pi";
import { newTemplateSchema } from "@/validation/ClientSectionValidations";

import { v4 } from "uuid";
import { clientStore } from "@/store/clients";
import useAxiosPost2 from "@/hooks/useAxiosPost2";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user";
import SelectDropDown from "./SelectDropDown";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const InputRadioContainer = ({ label, register, name, errors, id, value }) => (
  <div className="flex flex-col gap-2 text-black">
    <div className="flex items-center justify-start gap-1">
      <input
        id={id}
        type="radio"
        value={value}
        className="px-4 w-fit py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)] "
        {...register(name)}
      />
      <label
        htmlFor={id}
        className="capitalize text-[13px] font-light text-[#585865] flex justify-start items-center gap-3"
      >
        <div className="circle h-4 w-4 rounded-full border-2 border-blue-900 overflow-hidden">
          <span className="block h-full w-full border-2 border-white rounded-full"></span>
        </div>
        <span>{label}</span>
      </label>
    </div>
    {/* <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span> */}
  </div>
);

const ArticleForm = ({
  register,
  imgName,
  setImgName,
  toggle,
  imageRef,
  imagezipRef,
}) => (
  <div className="grid grid-cols-[1fr_1fr] gap-4 h-[50px] relative">
    <div className="w-full h-full border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full"
      >
        <input
          type="file"
          id="imgFile"
          className="hidden text-sm"
          accept={toggle ? "image/*" : ".zip"}
          multiple
          {...register("image", {
            onChange: (e) => {
              if (e.target.files.length > 1) {
                setImgName(`${e.target.files.length} images`);
                return;
              }
              setImgName(e.target.files[0].name);
            },
          })}
        />
        <span className="text-sm font-normal text-black">{imgName}</span>
        <span>
          <PiImageThin size={20} />
        </span>
      </label>
    </div>
  </div>
);

const InputContainer2 = ({
  placeholder,
  register,
  name,
  type = "text",
  errors,
  isDisabled = false,
}) => (
  <div className="flex flex-col gap-2 text-black">
    <input
      type={type}
      className="px-4 w-full py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)] "
      disabled={isDisabled}
      placeholder={placeholder}
      {...register(name)}
    />
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const NewTemplateForm1 = ({ closeBtn, closeFn }) => {
  const singleClient = clientStore((state) => state.singleClient);
  const allClient = clientStore((state) => state.allClient);
  const execute = clientStore((state) => state.execute);

  const [selectChange, setSelectChange] = useState("");

  const [clientData, setClientData] = useState("");

  // console.log(allClient);

  const params = useParams();

  const imageRef = useRef(null);

  const [imgName, setImgName] = useState("Upload An Image");
  // const [isUploaded, setIsUploaded] = useState(false);
  const [toggle, setToggle] = useState(true);
  const [isImgUploaded, setIsImgUploaded] = useState(false);
  const [isQuoteUploaded, setIsQuoteUploaded] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(newTemplateSchema),
    defaultValues: {
      screenSize: "10",
      delay: "24hours",
      order: "shuffle",
    },
  });

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } = useAxiosPost2({
    url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${clientData?.id}/templates`,
    queryName: "template_data_info_0987654",
  });

  const onSubmit = (value) => {
    setIsImgUploaded(false);
    setIsQuoteUploaded(false);

    if (value.image == undefined || value.image.length == 0) {
      setIsImgUploaded(true);
      return;
    }

    if (value.quotes === undefined || value.quotes.length == 0) {
      setIsQuoteUploaded(true);
      return;
    }
    // console.log(value);

    // console.log(clientData);

    if (clientData === "") {
      return;
    }
    // const input = {
    //   name: value.templateName,
    //   screenSize: value.screenSize,
    //   delay: value.delay,
    //   order: value.order,
    //   quotes: value.quotes,
    //   images: value.image,
    //   fileSize: "13mb",
    // };

    function calculateSize(value) {
      let result = 0;
      if (value.image.length === 1) {
        result = value.image[0].size + value.quotes[0].size;
      }
      if (value.image.length > 1) {
        for (let i = 0; i < value.image.length; i++) {
          result = result + value.image[i].size;
        }
        result = result + value.quotes[0].size;
      }
      return (Number(result) / 1000000).toFixed(3);
    }

    const formData = new FormData();
    Object.keys(value.image).forEach((file) => {
      formData.append("images", value.image[file]);
    });

    formData.append("delay", value.delay);
    formData.append("fileSize", `${calculateSize(value)}mb`);
    formData.append("screenSize", value.screenSize);
    formData.append("order", value.order);
    formData.append("name", value.templateName);
    // formData.append("images", value.image[0]);
    formData.append("quotes", value.quotes[0]);

    // console.log(input);

    handleRequest(formData, closeFn);
  };

  // console.log(errorMsg.response.data.message);

  useEffect(() => {
    if (selectChange !== "") {
      const result = allClient.filter((element) => element.id === selectChange);
      // console.log("Result: ", result);
      setClientData(result[0]);
    }
  }, [selectChange]);

  useEffect(() => {
    if (allClient.length === 0) {
      execute();
    }
  }, []);

  return (
    <div className="space-y-3">
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
         { errorMsg.response.data.message ? errorMsg.response.data.message : 'Network Error'}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      <Container>
        <h1 className="font-medium text-lg text-black mb-4">
          Client&apos;s Details
        </h1>
        {/* client id input */}
        {/* <InputContainer
          errors={errors}
          label={"Client ID"}
          name={"clientId"}
          register={register}
          //   isDisabled={true}
        /> */}
        <div className="flex flex-col items-stretch gap-3 mb-3">
          <p className="text-sm font-light">Client Name List</p>
          <SelectDropDown data={allClient} setSelectChange={setSelectChange} />
        </div>
      </Container>
      {/* MAIN INPUTS */}
      <Container>
        <h1 className="font-medium text-lg text-black mb-4">Template</h1>
        <InputContainer2
          placeholder={"Template name"}
          errors={errors}
          name={"templateName"}
          register={register}
        />
        {/* Radio buttons */}
        <div className="flex items-center justify-start gap-5">
          <InputRadioContainer
            errors={errors}
            name={"screenSize"}
            label={"10 Inches"}
            register={register}
            id={"10"}
            value={"10"}
          />
          <InputRadioContainer
            errors={errors}
            name={"screenSize"}
            label={"21 Inches"}
            register={register}
            id={"21"}
            value={"21"}
          />
        </div>
        {/* Purchase Date and IMEI Number Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Purchase Date"}
            name={"purchaseDate"}
            register={register}
            type="date"
          />
          {/* <InputContainer
            errors={errors}
            label={"IMEI number"}
            name={"imeiNumber"}
            register={register}
          /> */}
        </div>
        {/* Image input container */}
        <Container>
          <h1 className="font-medium text-lg text-black mb-4">Image</h1>
          <p className="text-sm">
            You can only upload single, multiple or a zip file containing images
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setImgName("Upload an image");
                setToggle(true);
              }}
              disabled={toggle}
              className={`px-4 py-1 rounded-lg text-sm cursor-pointer disabled:cursor-none ${
                toggle
                  ? "bg-black text-white border border-black"
                  : "bg-transparent border border-black text-black"
              }`}
            >
              images
            </button>
            <button
              disabled={!toggle}
              onClick={() => {
                setImgName("Upload a zip file");
                setToggle(false);
              }}
              className={`px-4 py-1 rounded-lg text-sm cursor-pointer disabled:cursor-none ${
                toggle
                  ? "bg-transparent border border-black text-black"
                  : "bg-black text-white"
              }`}
            >
              zip file
            </button>
          </div>
          {/* <ImageFormContainer /> */}
          <ArticleForm
            register={register}
            imgName={imgName}
            setImgName={setImgName}
            toggle={toggle}
            imageRef={imageRef}
          />
          {isImgUploaded && (
            <p className="text-sm text-red-800">Please Upload Image</p>
          )}
        </Container>
        {/* Quotes input container */}
        <Container>
          <h1 className="font-medium text-lg text-black mb-4">Quotes</h1>
          <p className="text-sm">
            You can only upload xlsx files - excel files
          </p>
          <div className="py-1 px-2 border rounded-md">
            <input
              type="file"
              id="fileSelect"
              accept=".xlsx, .xls, .csv"
              className="py-2 px-2"
              placeholder=""
              {...register("quotes")}
            />
          </div>
          {isQuoteUploaded && (
            <p className="text-sm text-red-800">Please Upload File</p>
          )}
          {/* <QuoteContainer /> */}
        </Container>
        {/* delay, order, filesize */}
        {/* delay */}
        <div className="w-full grid grid-cols-2 gap-10">
          <div className="space-y-3 border p-3">
            <p className="text-sm">Delay</p>
            <div className="flex items-center justify-start gap-5">
              <InputRadioContainer
                errors={errors}
                name={"delay"}
                label={"24 hours"}
                register={register}
                id={"24hours"}
                value={"24hours"}
              />
              <InputRadioContainer
                errors={errors}
                name={"delay"}
                label={"12 hours"}
                register={register}
                id={"12hours"}
                value={"12hours"}
              />
            </div>
          </div>

          {/* order */}
          <div className="space-y-3 border p-3">
            <p className="text-sm">Order</p>
            <div className="flex items-center justify-start gap-5">
              <InputRadioContainer
                errors={errors}
                name={"order"}
                label={"Shuffle"}
                register={register}
                id={"shuffle"}
                value={"shuffle"}
              />
              <InputRadioContainer
                errors={errors}
                name={"order"}
                label={"sequential"}
                register={register}
                id={"sequential"}
                value={"sequential"}
              />
            </div>
          </div>
        </div>
        {/* <Container>
          <div className="w-full grid grid-cols-2 gap-10">
            <SelectInput
              label={"Delay"}
              data={delayData}
              placeholder={"Select Delay"}
            />
            <SelectInput
              label={"Order"}
              data={orderData}
              placeholder={"Select Order"}
            />
          </div>
        </Container> */}
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          type="submit"
          className={`py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
            isLoading || isSuccess ? "" : "btn-animate"
          }`}
          disabled={isLoading || isSuccess}
        >
          <IoSaveSharp size={20} />
          {isLoading && "...saving"}
          {isSuccess && "Done!!!"}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default NewTemplateForm1;
