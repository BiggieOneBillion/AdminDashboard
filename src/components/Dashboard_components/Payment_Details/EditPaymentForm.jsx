import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "@/validation/PaymentSectionValidation";
import useAxiosPost from "@/hooks/useAxiosPost";
import useAxiosPut from "@/hooks/useAxiosPut";

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

// {
//     "id": "7b967845-70f5-4262-870b-a01316f0dbbb",
//     "clientId": "5c04e022-dae4-4852-ae71-61a8e2f0e046",
//     "transactionId": "5c04e022dae44",
//     "date": "2024-06-13",
//     "deviceName": "ADFG001",
//     "deviceSize": "10 inches",
//     "deviceId": "DOO22",
//     "amount": 200000,
//     "isComplete": true,
//     "deletedAt": null,
//     "createdAt": "2024-06-04T08:49:23.405Z",
//     "updatedAt": "2024-06-04T08:49:23.405Z",
//     "serial": 1
// }

const EditPaymentForm = ({ closeBtn, data }) => {
  console.log(data.deviceName);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(paymentSchema),
    defaultValues: {
      isComplete: data.isComplete ? "complete" : "incomplete",
      clientId: data.clientId,
      transactionId: data.transactionId,
      deviceId: data.deviceId,
      amount: data.amount,
      deviceName: data.deviceName,
      date: data.date,
      deviceSize: data.deviceSize.slice(0, 2),
    },
  });

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPut({
      url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/payments/${data.id}`,
      queryName: "client_invoice_info",
    });

  const onSubmit = (value) => {
    // console.log({
    //   ...value,
    //   isComplete: value.isComplete === "incomplete" ? false : true,
    //   deviceSize: `${value.deviceSize} inches`
    // });
    const info = {
      ...value,
      isComplete: value.isComplete === "incomplete" ? false : true,
      deviceSize: `${value.deviceSize} inches`,
    };
    console.log(info);
    handleRequest(info);
  };

  return (
    <div className="space-y-3 ">
      {/* {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Credential must be unique!
        </p>
      )} */}
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
            // isDisabled={true}
          />
        </div>

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
          {isError && "Try Again!!"}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default EditPaymentForm;
