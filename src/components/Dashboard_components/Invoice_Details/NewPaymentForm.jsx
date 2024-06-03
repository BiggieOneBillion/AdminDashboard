import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "@/validation/PaymentSectionValidation";

const Container = ({ children }) => (
  <div className="py-4 bordery rounded-lg flex flex-col gap-2 bg-whitey">
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

const NewPaymentForm = ({ closeBtn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentStatus: "incomplete",
    },
  });

  const onSubmit = (value) =>{ 
    // console.log(value);
  }

  return (
    <div className="space-y-3 ">
      <Container>
        {/* client and tansaction Id  */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Transaction ID"}
            name={"transactionId"}
            register={register}
            isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Client ID"}
            name={"clientId"}
            register={register}
          />
        </div>
        {/* clients name */}
        <InputContainer
          errors={errors}
          label={"Client name"}
          name={"name"}
          register={register}
          isDisabled={true}
        />
        {/* Date and size Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Date"}
            name={"date"}
            register={register}
            type="'date"
          />
          <InputContainer
            errors={errors}
            label={"Size"}
            name={"size"}
            register={register}
            type="number"
          />
        </div>
        {/* Device Id and Device name */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Device Id"}
            name={"deviceId"}
            register={register}
          />
          <InputContainer
            errors={errors}
            label={"Device name"}
            name={"deviceName"}
            register={register}
          />
        </div>
        {/* Amount Paid */}
        <InputContainer
          errors={errors}
          label={"Amount paid"}
          name={"amountPaid"}
          register={register}
        />
        {/* Radio buttons */}
        <div className="flex items-center justify-start gap-5">
          <InputRadioContainer
            errors={errors}
            name={"paymentStatus"}
            label={"Complete"}
            register={register}
            id={"Complete"}
            value={"complete"}
          />
          <InputRadioContainer
            errors={errors}
            name={"paymentStatus"}
            label={"Incomplete"}
            register={register}
            id={"Incomplete"}
            value={"incomplete"}
          />
        </div>
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
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

export default NewPaymentForm;
