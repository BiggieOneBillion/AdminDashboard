import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import AddNewArticle from "./AddNewArticle";

const Container = ({ children }) => (
  <div className="p-4 bordery  rounded-lg flex flex-col gap-2 bg-whitey">
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


// INCOMPLETE FORM 

const NewProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="space-y-3 bg-[#F1F1F1] p-2 rounded-xl">
      <Container>
        <InputContainer
          errors={errors}
          label={"Title"}
          name={"title"}
          register={register}
        />
        <TextAreaContainer
          errors={errors}
          label={"Description"}
          name={"description"}
          register={register}
        />
      </Container>
      <AddNewArticle register={register}/>
      {/* btn container */}
      <div className="flex justify-end gap-5">
        <button className="py-3 w-[150px] text-center text-sm text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate">
          <IoSaveSharp size={20} />
          <span>Save</span>
        </button>
        <button className="py-3  w-[150px] text-center text-sm text-gray-400 bg-white border flex justify-center items-center gap-2 rounded-lg btn-animate">
          <IoMdClose size={20} />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default NewProductForm;
