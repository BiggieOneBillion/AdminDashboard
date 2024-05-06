import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const InputRadioContainer = ({ label, register, name, errors, id }) => (
  <div className="flex flex-col gap-2 text-black">
    <div className="flex items-center justify-start gap-1">
      <input
        id={id}
        type="radio"
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
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const NewDeviceForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="space-y-3 ">
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
          isDisabled={true}
        />
        {/* Name and Email Input  */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Name"}
            name={"name"}
            register={register}
            isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Email"}
            name={"email"}
            register={register}
            isDisabled={true}
          />
        </div>
        {/* Location and Phone Number Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Location"}
            name={"location"}
            register={register}
            isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Phone Number"}
            name={"phoneNumber"}
            register={register}
            isDisabled={true}
          />
        </div>
      </Container>
      <Container>
        <h1 className="font-medium text-lg text-black mb-4">Device Details</h1>
        <InputContainer
          errors={errors}
          label={"Device ID"}
          name={"deviceId"}
          register={register}
        />
        {/* Radio buttons */}
        <div className="flex items-center justify-start gap-5">
          <InputRadioContainer
            errors={errors}
            name={"screenSize"}
            label={"10 inches"}
            register={register}
            id={"10inches"}
          />
          <InputRadioContainer
            errors={errors}
            name={"screenSize"}
            label={"21 inches"}
            register={register}
            id={"21inches"}
          />
        </div>
        {/* Purchase Date and IMEI Number Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Purchase Date"}
            name={"purchaseDate"}
            register={register}
          />
          <InputContainer
            errors={errors}
            label={"IMEI number"}
            name={"imeiNumber"}
            register={register}
          />
        </div>
      </Container>
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

export default NewDeviceForm;
