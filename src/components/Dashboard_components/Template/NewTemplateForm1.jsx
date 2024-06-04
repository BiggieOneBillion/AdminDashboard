import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";

import { PiImageThin } from "react-icons/pi";
import {newTemplateSchema} from "@/validation/ClientSectionValidations"

import { v4 } from "uuid";
import { clientStore } from "@/store/clients";
import useAxiosPost2 from "@/hooks/useAxiosPost2";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

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

const ArticleForm = ({ register }) => (
  <div className="grid grid-cols-[300px_200px_1fr] gap-4 h-[50px] relative">
    {/* first input */}
    <div className="w-full h-full border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full"
      >
        <input
          type="file"
          id="imgFile"
          className="hiddeny text-sm"
          {...register("image")}
        />
        {/* <span className="text-xs font-light text-black">Upload An Image</span> */}
        <span>
          <PiImageThin size={20} />
        </span>
      </label>
    </div>
    {/* second input */}
    <div className="w-full h-full border rounded-2xl overflow-hidden">
      <input
        type="text"
        placeholder="Title"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl focus-within:outline-none text-sm font-normal"
        {...register("title")}
      />
    </div>
    {/* third input */}
    <div className="w-full h-full border rounded-xl overflow-hidden">
      <input
        type="text"
        placeholder="Sub text"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
        {...register("subtext")}
      />
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

const NewTemplateForm1 = ({ closeBtn }) => {
  const singleClient = clientStore((state) => state.singleClient);

  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newTemplateSchema),
    defaultValues: {
      screenSize: "10",
      delay: "24hours",
      order: "shuffle",
      //   clientId: singleClient[0]?.id,
      //   name: singleClient[0]?.name,
      //   email: singleClient[0]?.email,
      //   location: singleClient[0]?.location,
      //   phoneNumber: singleClient[0]?.mobile,
    },
  });

  const { handleRequest, isError, isLoading, isSuccess } = useAxiosPost2({
    url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/templates`,
    queryName: "template_data_info_0987654",
  });

  const onSubmit = (value) => {
    // console.log(value);
    const input = {
      name: value.templateName,
      screenSize: value.screenSize,
      delay: value.delay,
      order: value.order,
      quotes: value.quotes,
      images: value.image,
      fileSize: "13mb",
    };

    // console.log(input);

    handleRequest(input);
    // console.log(value);
    // name:Simply Divine
    // screenSize:10
    // delay:24 hours
    // order: shuffle
    // fileSize:34 mb
    // quotes
    // images
  };

  const delayData = ["12 hours", "24 hours"];

  const orderData = ["Shuffle", "linear"];
  return (
    <div className="space-y-3">
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Network Error
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
        <InputContainer
          errors={errors}
          label={"Client ID"}
          name={"clientId"}
          register={register}
        //   isDisabled={true}
        />
        {/* Name and Email Input  */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Name"}
            name={"name"}
            register={register}
            // isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Email"}
            name={"email"}
            register={register}
            // isDisabled={true}
          />
        </div>
        {/* Location and Phone Number Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Location"}
            name={"location"}
            register={register}
            // isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Phone Number"}
            name={"phoneNumber"}
            register={register}
            // isDisabled={true}
          />
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
          <InputContainer
            errors={errors}
            label={"IMEI number"}
            name={"imeiNumber"}
            register={register}
          />
        </div>
        {/* Image input container */}
        <Container>
          <h1 className="font-medium text-lg text-black mb-4">Images</h1>
          {/* <ImageFormContainer /> */}
          <ArticleForm register={register} />
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
              ID="fileSelect"
              accept=".xlsx, .xls, .csv"
              className="py-2 px-2"
              placeholder=""
              {...register("quotes")}
            />
          </div>
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
                label={"linear"}
                register={register}
                id={"linear"}
                value={"linear"}
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
