import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { newTemplateSchema } from "@/validation/ClientSectionValidations";
import { PiImageThin } from "react-icons/pi";
import ImageFormContainer from "./ImageFormContainer";
import QuoteContainer from "./QuotesContainer";
import SelectInput from "./SelectInput";
import { v4 } from "uuid";
import { clientStore } from "@/store/clients";
import useAxiosPost2 from "@/hooks/useAxiosPost2";
import { useParams } from "next/navigation";
import axios from "axios";
import { object } from "zod";
import useAxiosPut2 from "@/hooks/useAxiosPut2";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
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

const EditTemplateForm = ({ closeBtn, closeFn, data }) => {
  // useState
  const [imgName, setImgName] = useState("Upload An Image");
  const [isImgUploaded, setIsImgUploaded] = useState(false);
  const [toggle, setToggle] = useState(true);
  // use ref
  const imageRef = useRef(null);
  const imagezipRef = useRef(null);

  const params = useParams();

  function convertDateFormat(dateString) {
    // Split the input date string by '/'
    const [day, month, year] = dateString.split("/");
    // Return the date in ISO format YYYY-MM-DD
    return `${year}-${month}-${day}`;
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPut2({
      url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/templates/${data.id}`,
      queryName: "template_data_info_0987654",
    });

  const onSubmit = async (value) => {
    setIsImgUploaded(false);

    if (value.image == undefined || value.image.length == 0) {
      setIsImgUploaded(true);
      return;
    }

    const formData = new FormData();
    Object.keys(value.image).forEach((file) => {
      formData.append("images", value.image[file]);
    });

    handleRequest(formData, closeFn);
  };

  useEffect(() => {
    resetField("image");
  }, [toggle]);

  return (
    <div className="space-y-3">
      {/* {isUploaded && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Image or quotes file missing!! Please upload
        </p>
      )} */}
      {errorMsg !== "" && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          {errorMsg}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      {/* MAIN INPUTS */}
      <Container>
        <h1 className="font-medium text-lg text-black mb-4">Template</h1>

        {/* Notes and instructions */}
        <div className=" space-y-1 mb-10 p-2 bg-slate-50">
          <p className="font-medium text-slate-700 text-sm underline">
            Please Note:
          </p>
          <p className="font-normal text-sm text-slate-500">
            You can only upload new images to the existing images in this
            template, either as single, multiple or a zip file containing
            multiple images. If you wish to fully edit the template, you have to
            delete this current template and upload a new template with all the
            corrections. As only one template can be added per client
          </p>
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
            imagezipRef={imagezipRef}
          />
          {isImgUploaded && (
            <p className="text-sm text-red-800">Please Upload Image</p>
          )}
        </Container>
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

export default EditTemplateForm;
