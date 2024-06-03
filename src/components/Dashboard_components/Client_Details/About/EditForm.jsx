import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { editAboutValidation } from "@/validation/ClientSectionValidations";

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
      rows={20}
      {...register(name)}
    ></textarea>
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const EditForm = ({ closeBtn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editAboutValidation),
  });

  const onSubmit = (value) => {
    // console.log(value);
  };
  return (
    <div className="space-y-3 ">
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
      {/* btn container */}
      <div className="grid grid-cols-6 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          className="py-3 col-span-4 w-full  text-center text-sm text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate"
        >
          <IoSaveSharp size={20} />
          <span>Save</span>
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default EditForm;
