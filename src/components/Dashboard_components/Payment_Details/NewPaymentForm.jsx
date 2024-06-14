import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "@/validation/PaymentSectionValidation";
import useAxiosPost from "@/hooks/useAxiosPost";
import DeviceDropDown from "../Payments/DeviceDropDown";

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

const NewPaymentForm = ({ closeBtn, data, closeFn }) => {
  const [getDeviceId, setGetDeviceId] = useState("");

  const [errorId, setErrorId] = useState(false);
  // console.log(data);
  // console.log(closeBtn);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(paymentSchema),
    defaultValues: {
      isComplete: "incomplete",
      clientId: data.id,
      name: data.name,
    },
  });

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPost({
      url: "https://api-prestigecalendar.olotusquare.co/api/v1/admin/payments",
      queryName: "client_device_info",
      fn: () => {
        reset({
          transactionId: "",
          deviceSize: "",
          date: "",
          deviceId: "",
          deviceName: "",
          amount: "",
        });
      },
    });

  const onSubmit = (value) => {
    // Before checking if the user selected a device, clear the deviceId error message.
    setErrorId(false);
    // Check if the user selected a device id
    if (getDeviceId === "") {
      // If not then show error message
      setErrorId(true);
      return;
    }

    console.log({
      ...value,
      isComplete: value.isComplete === "incomplete" ? false : true,
      deviceId: getDeviceId,
    });

    handleRequest(
      {
        ...value,
        isComplete: value.isComplete === "incomplete" ? false : true,
        deviceId: getDeviceId,
      },
      closeFn
    );
    // handleRequest({
    //   ...value,
    //   isComplete: value.isComplete === "incomplete" ? false : true,
    // });
  };

  return (
    <div className="space-y-3 ">
      {errorId && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Please select a device
        </p>
      )}
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Credential must be unique!
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      <Container>
        {/* client and tansaction Id  */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Transaction ID"}
            name={"transactionId"}
            register={register}
            // isDisabled={true}
          />
          <InputContainer
            errors={errors}
            label={"Client ID"}
            name={"clientId"}
            register={register}
            isDisabled={true}
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
            type="date"
          />
          <InputContainer
            errors={errors}
            label={"Size"}
            name={"deviceSize"}
            register={register}
            type="number"
          />
        </div>
        {/* Device Id and Device name */}
        <div className="grid grid-cols-2 gap-5">
          {/* <InputContainer
            errors={errors}
            label={"Device Id"}
            name={"deviceId"}
            register={register}
          /> */}
          <DeviceDropDown data={data.id} getDevice={setGetDeviceId} />
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
          name={"amount"}
          register={register}
        />
        {/* Radio buttons */}
        <div className="flex items-center justify-start gap-5">
          <InputRadioContainer
            errors={errors}
            name={"isComplete"}
            label={"Complete"}
            register={register}
            id={"complete"}
            value={"complete"}
          />
          <InputRadioContainer
            errors={errors}
            name={"isComplete"}
            label={"Incomplete"}
            register={register}
            id={"incomplete"}
            value={"incomplete"}
          />
        </div>
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate ${
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

export default NewPaymentForm;
