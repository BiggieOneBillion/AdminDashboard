import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "@/validation/PaymentSectionValidation";
import { clientStore } from "@/store/clients";
import SelectDropDown from "./SelectDropDown";
import useAxiosPost2 from "@/hooks/useAxiosPost2";
import useAxiosPost from "@/hooks/useAxiosPostPay";

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

const NewInvoiceForm = ({ closeBtn, closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: zodResolver(paymentSchema),
    defaultValues: {
      size: "10",
    },
  });

  const allClient = clientStore((state) => state.allClient);
  const execute = clientStore((state) => state.execute);

  const [selectChange, setSelectChange] = useState("");

  const [clientData, setClientData] = useState("");

  // console.log('ClientData:',clientData);

  const { handleRequest, isLoading, isSuccess, isError, errorMsg } =
    useAxiosPost({
      url: "https://api.prestigecalendar.com/api/v1/admin/invoices",
      queryName: "clients_invoice_overall_info_table_data",
    });

  const onSubmit = (value) => {
    if (clientData === "") return;
    const inputValue = {
      clientId: clientData.id,
      invoiceId: value.invoiceId,
      notes: value.notes,
      issuedAt: value.issuedAt,
      dueAt: value.dueAt,
      details: [
        {
          amount: value.amount,
          description: value.description,
          quantity: value.quantity,
          size: value.size,
        },
      ],
    };
    handleRequest(inputValue, closeFn);
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
    <div className="space-y-3 ">
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Network Error
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
            label={"Invoice ID"}
            name={"invoiceId"}
            register={register}
          />
          {/* <InputContainer
            errors={errors}
            label={"Client ID"}
            name={"clientId"}
            register={register}
          /> */}
          <div className="flex flex-col items-stretch gap-3 mb-3">
            <p className="text-sm font-light">Client Name List</p>
            {allClient.length !== 0 && (
              <SelectDropDown
                data={allClient}
                setSelectChange={setSelectChange}
              />
            )}
          </div>
        </div>
        {/* Notes */}
        <InputContainer
          errors={errors}
          label={"Note"}
          name={"notes"}
          register={register}
        />
        {/* Issue Date and Due Date */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Issue Date"}
            name={"issuedAt"}
            register={register}
            type="date"
          />
          <InputContainer
            errors={errors}
            label={"Due At"}
            name={"dueAt"}
            register={register}
            type="date"
          />
        </div>
        {/* Device Id and Device name */}
        <InputContainer
          errors={errors}
          label={"Description"}
          name={"description"}
          register={register}
        />
        {/* Amount Paid And Quantity */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Amount"}
            name={"amount"}
            register={register}
          />
          <InputContainer
            errors={errors}
            label={"Quantity"}
            name={"quantity"}
            register={register}
            type="number"
          />
        </div>
        {/* Radio buttons */}
        <div className="flex items-center justify-start gap-5">
          <InputRadioContainer
            errors={errors}
            name={"size"}
            label={"21 inches"}
            register={register}
            id={"21"}
            value={"21"}
          />
          <InputRadioContainer
            errors={errors}
            name={"size"}
            label={"10 inches"}
            register={register}
            id={"10"}
            value={"10"}
          />
        </div>
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          // className="py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate"
          className={`py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
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

export default NewInvoiceForm;
