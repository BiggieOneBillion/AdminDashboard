import React from "react";
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

const ArticleForm = ({}) => (
  <div className="grid grid-cols-[1fr_200px_1fr] gap-4 h-[50px] relative">
    {/* first input */}
    <div className="w-full h-full border border-blue-700 rounded-2xl">
      <label
        htmlFor="imgFile"
        className=" h-full flex px-5 justify-between items-center w-full "
      >
        <input type="file" id="imgFile" className="hidden" />
        <span className="text-xs font-light text-black">Upload An Image</span>
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
      />
    </div>
    {/* third input */}
    <div className="w-full h-full border rounded-xl overflow-hidden">
      <input
        type="text"
        placeholder="Sub text"
        className="h-full px-3 py-1 w-full placeholder:text-sm placeholder:font-light rounded-2xl  focus-within:outline-none text-sm font-normal"
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

const NewTemplateForm = ({ closeBtn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newTemplateSchema),
    defaultValues: {
      size: "10inches",
    },
  });

  const onSubmit = (value) => {
    console.log(value);
  };

  const delayData = ["12 hours", "24 hours"];

  const orderData = ["Shuffle", "linear"];
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
            name={"size"}
            label={"10 Inches"}
            register={register}
            id={"10inches"}
            value={"10inches"}
          />
          <InputRadioContainer
            errors={errors}
            name={"size"}
            label={"21 Inches"}
            register={register}
            id={"21inches"}
            value={"21inches"}
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
          <ImageFormContainer />
        </Container>
        {/* Quotes input container */}
        <Container>
          <h1 className="font-medium text-lg text-black mb-4">Quotes</h1>
          <QuoteContainer />
        </Container>
        {/* delay, order, filesize */}
        <Container>
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
        </Container>
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          // onClick={handleSubmit(onSubmit)}
          type="submit"
          className="py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate"
        >
          <IoSaveSharp size={20} />
          <span>Save</span>
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default NewTemplateForm;
