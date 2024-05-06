import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const NewClientForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="space-y-3">
      <InputContainer
        errors={errors}
        label={"Client ID"}
        name={"clientId"}
        register={register}
        isDisabled={true}
      />
      <InputContainer
        errors={errors}
        label={"Name"}
        name={"name"}
        register={register}
      />
      <InputContainer
        errors={errors}
        label={"Location"}
        name={"location"}
        register={register}
      />
      <div className="grid lg:grid-cols-2 gap-5">
        <InputContainer
          errors={errors}
          label={"Email"}
          name={"email"}
          register={register}
          type="email"
        />
        <InputContainer
          errors={errors}
          label={"Mobile"}
          name={"mobile"}
          register={register}
          type="tel"
        />
      </div>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button className="py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate">
          <IoSaveSharp size={20} />
          <span>Save</span>
        </button>
        <button className="py-3 col-span-2 text-center text-sm w-full text-gray-400 bg-white border flex justify-center items-center gap-2 rounded-lg btn-animate">
          <IoMdClose size={20} />
          <span>Cancel</span>
        </button>
      </div>
    </div>
  );
};

export default NewClientForm;
