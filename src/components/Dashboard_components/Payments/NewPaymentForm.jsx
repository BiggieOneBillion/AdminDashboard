import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import useAxiosPost from "@/hooks/useAxiosPost";
import { clientStore } from "@/store/clients";
import SelectDropDown from "../Template/SelectDropDown";
import DeviceDropDown from "./DeviceDropDown";

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

const NewPaymentForm = ({ closeBtn, closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm({
    // resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentStatus: "incomplete",
      deviceSize: "10 inches",
    },
  });

  const allClient = clientStore((state) => state.allClient);
  const execute = clientStore((state) => state.execute);

  const [selectChange, setSelectChange] = useState("");

  const [getDeviceId, setGetDeviceId] = useState("");

  const [clientData, setClientData] = useState("");

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPost({
      url: "https://api.prestigecalendar.com/api/v1/admin/payments",
      queryName: "clients_payment_overall_info",
      fn: () => {
        reset({
          transactionId: "",
          deviceSize: "",
          date: "",
          deviceId: "",
          // deviceName: "",
          amount: "",
        });
      },
    });

  const onSubmit = (value) => {
    // console.log(value);
    if (getDeviceId == "") return;

    const input = {
      clientId: clientData.id,
      transactionId: value.transactionId,
      date: value.date,
      deviceName: "TM09VS",
      deviceSize: value.deviceSize,
      deviceId: getDeviceId,
      amount: value.amountPaid,
      isComplete: value.paymentStatus !== "incomplete" ? true : false,
    };

    handleRequest(input, closeFn);

    // console.log(input)
  };

  useEffect(() => {
    if (selectChange !== "") {
      const result = allClient.filter((element) => element.id === selectChange);
      setClientData(result[0]);
    }
  }, [selectChange]);

  useEffect(() => {
    if (allClient.length === 0) {
      execute();
    }
  }, []);

  return (
    <div className="space-y-3">
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
          />
          {/* <InputContainer
            errors={errors}
            label={"Client ID"}
            name={"clientId"}
            register={register}
          /> */}
          <div className="flex flex-col items-stretch gap-2 mb-3">
            <p className="text-sm font-light">Client Name List</p>
            <SelectDropDown
              data={allClient}
              setSelectChange={setSelectChange}
            />
          </div>
        </div>
        {/* clients name */}
        {/* <InputContainer
          errors={errors}
          label={"Client name"}
          name={"name"}
          register={register}
        /> */}
        {/* Date and size Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Date"}
            name={"date"}
            register={register}
            type="date"
          />
          {/* <InputContainer
            errors={errors}
            label={"Size"}
            name={"deviceSize"}
            register={register}
            type="number"
          /> */}
          <div className="space-y-5">
            <p className="text-sm text-[rgba(0,0,0,0.6)]">Size</p>
            <div className="flex items-center justify-start gap-5">
              <InputRadioContainer
                errors={errors}
                name={"deviceSize"}
                label={"10 inches"}
                register={register}
                id={"10"}
                value={"10 inches"}
              />
              <InputRadioContainer
                errors={errors}
                name={"deviceSize"}
                label={"21 inches"}
                register={register}
                id={"21"}
                value={"21 inches"}
              />
            </div>
          </div>
        </div>
        {/* Device Id and Device name */}
        <div className="grid grid-cols-2y gap-5">
          {clientData === "" ? (
            <InputContainer
              errors={errors}
              label={"Device Id"}
              name={"deviceId"}
              register={register}
              isDisabled={true}
            />
          ) : (
            <DeviceDropDown data={clientData.id} getDevice={setGetDeviceId} />
          )}
          {/* <InputContainer
            errors={errors}
            label={"Device name"}
            name={"deviceName"}
            register={register}
          /> */}
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
          className={`py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
            isLoading || isSuccess ? "" : "btn-animate"
          }`}
          disabled={isLoading || isSuccess}
        >
          <IoSaveSharp size={20} />
          {isLoading && "...saving"}
          {isSuccess && "Done!!!"}
          {/* <span>Save</span> */}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default NewPaymentForm;
