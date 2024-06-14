import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { PiImageThin, PiTrash } from "react-icons/pi";
import axios from "axios";
import usePostData from "@/hooks/usePostData";
import { useParams } from "next/navigation";
import { userStore } from "@/store/user";
import useAxiosPost from "@/hooks/useAxiosPost";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const TextAreaContainer = ({ label, register, name, errors }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-[13px] font-light text-[#585865]">
      {label}
    </label>
    <textarea
      className="px-4 w-full py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)]"
      rows={10}
      {...register(name)}
    ></textarea>
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const ArticleForm = ({ register }) => (
  <div className="grid grid-cols-[300px_200px_1fr] gap-4 h-[50px] relative">
    {/* first input */}
    <div className="w-full h-full border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full "
      >
        <input
          type="file"
          id="imgFile"
          // className="hidden"
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

const AddNewsForm = ({ closeBtn, closeFn }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const params = useParams();

  const [upload, setUpload] = useState(false);
  const [errMsg, setErrMsg] = useState("Network Error");

  const { handleRequest, isError, isLoading, isSuccess } = useAxiosPost({
    url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/news`,
    queryName: "client_news_info",
    fn: () =>
      reset({
        image: "",
        title: "",
        subtext: "",
        body: "",
      }),
  });

  const token_id = userStore((state) => state.token_id);

  const onSubmit = async (values) => {
    console.log(values.image);
    // Create a FormData object
    const formData = new FormData();
    formData.append("asset", values.image[0]);

    // Log FormData content for debugging
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

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
      // console.log(response.status);
      if (response.status === 201) {
        setUpload(false);
        // console.log(response.data.entity.url);
        const data = {
          title: values.title,
          subtext: values.subtext,
          coverImageUrl: response.data.entity.url,
        };
        handleRequest(data, closeFn);
      }
    } catch (error) {
      setErrMsg("Image Not Uploaded");
      // console.log("Error msg: " + error.message);
    }

    // submit the file to s3 bucket and then get the url
    // after successfully getting the url then we proceed to sending the remaining data with the url gotten from s3 bucket
    // handle errors!
  };

  return (
    <div className="space-y-3">
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
      <Container>
        <TextAreaContainer
          errors={errors}
          label={"Main Body"}
          name={"body"}
          register={register}
        />
      </Container>
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

export default AddNewsForm;
