import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiImageThin, PiTrash } from "react-icons/pi";
import useAxiosPost from "@/hooks/useAxiosPost";
import { useParams } from "next/navigation";
import axios from "axios";
import { userStore } from "@/store/user";
import useAxiosPut from "@/hooks/useAxiosPut";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const TextAreaContainer = ({ label, register, name, rows = 10 }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-[13px] font-light text-[#585865]">
      {label}
    </label>
    <textarea
      className="px-4 w-full py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)]"
      rows={rows}
      {...register(name, { required: "This field is required" })}
    ></textarea>
    {/* <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span> */}
  </div>
);

const ArticleForm = ({ register }) => (
  <div className="grid grid-cols-[1fr_1fr] gap-4 h-[50px]y h-fit relative items-end">
    {/* first input */}
    <div className="w-full h-fit py-3 border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full "
      >
        <input
          type="file"
          accept="image/*"
          id="imgFile"
          className="hiddeny"
          {...register("image")}
        />
        {/* <span className="text-xs font-light text-black">Upload An Image</span> */}
        <span>
          <PiImageThin size={20} />
        </span>
      </label>
    </div>
    <div className="flex flex-col gap-1">
      <label className="text-sm text-gray-500 font-light">Title </label>
      {/* second input */}
      <div className="w-full h-full border rounded-2xl overflow-hidden ">
        <input
          type="text"
          placeholder="Title"
          className="h-full px-3 py-5 w-[300px]  placeholder:text-sm placeholder:font-light rounded-2xl focus-within:outline-none text-sm font-normal"
          {...register("title", { required: "This field is required" })}
        />
      </div>
    </div>
    {/* third input */}
    <div className="w-full col-span-2 h-full bordery rounded-xl overflow-hidden">
      {/* <input
        type="text"
        placeholder="Sub text"
        className="h-full px-3 py-1 border w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
        {...register("subtext", { required: "This field is required" })}
      /> */}
      <TextAreaContainer
        label={"Sub-Title"}
        name={"subtext"}
        register={register}
        rows={2}
      />
    </div>
  </div>
);


const EditNewsForm = ({ closeBtn, info }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: info.coverImageUrl,
      title: info.title,
      subtext: info.subtext,
    },
  });

  const token_id = userStore((state) => state.token_id);

  const params = useParams();

  const [upload, setUpload] = useState(false);
  const [errMsg, setErrMsg] = useState("Network Error");

  const { handleRequest, isError, isLoading, isSuccess } = useAxiosPut({
    url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/news/${info.id}`,
    queryName: "client_news_info",
    fn: () =>
      reset({
        image: "",
        title: "",
        subtext: "",
        body: "",
      }),
  });

  const onSubmit = async (value) => {
  
    if (typeof value.image !== "string") {
      const formData = new FormData();
      formData.append("asset", value.image[0]);
      try {
        setUpload(true);
        const response = await axios.post(
          `https://api-prestigecalendar.olotusquare.co/api/v1/admin/assets/for/${params.id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token_id}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 201) {
          setUpload(false);
          const data = {
            title: value.title,
            subtext: value.subtext,
            coverImageUrl: response.data.entity.url,
          };
          handleRequest(data);
        }
      } catch (error) {
        setErrMsg("Image Not Uploaded");
      }
    } else {
      const data = {
        title: value.title,
        subtext: value.subtext,
        coverImageUrl: value.image,
      };
      handleRequest(data);
    }
  };
  return (
    <div className="space-y-3 ">
      {isError ||
        (errMsg !== "Network Error" && (
          <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
            {errMsg}
          </p>
        ))}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      {/* <Container>
        <TextAreaContainer
          errors={errors}
          label={"Body"}
          name={"body"}
          register={register}
        />
      </Container> */}
      <ArticleForm register={register} />
      {/* btn container */}
      <div className="flex justify-end gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 w-[150px] text-center text-sm text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
            isLoading || isSuccess || upload ? "" : "btn-animate"
          }`}
          disabled={isLoading || isSuccess || upload}
        >
          <IoSaveSharp size={20} />
          {isLoading && "...saving"}
          {isSuccess && "Done!!!"}
          {upload && "Uploading..."}
        </button>
        {/* <button className="py-3  w-[150px] text-center text-sm text-gray-400 bg-white border flex justify-center items-center gap-2 rounded-lg btn-animate">
          <IoMdClose size={20} />
          <span>Cancel</span>
        </button> */}
      </div>
    </div>
  );
};

export default EditNewsForm;
