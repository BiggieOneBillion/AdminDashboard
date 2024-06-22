import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AddNewArticle from "./AddNewArticle";
import useAxiosPut from "@/hooks/useAxiosPut";
import { useParams } from "next/navigation";

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
      {...register(name, { required: true })}
    ></textarea>
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const EditServiceForm2 = ({ closeBtn, closeFn, data }) => {
  const [images, setImages] = useState([]);

  const params = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: data.description,
    },
  });

  const { handleRequest, isError, isLoading, isSuccess } = useAxiosPut({
    url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/services`,
    queryName: ["service_data_info", params.id],
  });

  const onSubmit = (values) => {
    console.log(values);
    if (images.length == 0) return;
    console.log(images);

    const inputValue = {
      description: values.description,
      images: images,
    };

    handleRequest(inputValue, closeFn);
  };

  useEffect(() => {
    setImages(data.images);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      <Container>
        {/* <InputContainer
          errors={errors}
          label={"Title"}
          name={"title"}
          register={register}
        /> */}
        <TextAreaContainer
          errors={errors}
          label={"Description"}
          name={"description"}
          register={register}
        />
      </Container>
      <AddNewArticle
        register={register}
        images={images}
        setImages={setImages}
      />
      {/* btn container */}
      <div className="grid grid-cols-8 gap-5 mt-5">
        <span className="col-span-4"></span>
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 col-span-2 text-center text-sm text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
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

export default EditServiceForm2;
