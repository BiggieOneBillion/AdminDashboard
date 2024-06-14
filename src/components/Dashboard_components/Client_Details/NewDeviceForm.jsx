import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { newDeviceSchema } from "@/validation/ClientSectionValidations";
import { clientStore } from "@/store/clients";
import usePostData from "@/hooks/usePostData";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosPost from "@/hooks/useAxiosPost";
// import { QueryClient } from "@tanstack/react-query";

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

const NewDeviceForm = ({ closeBtn, closeFn }) => {
  const queryClient = useQueryClient();
  //  get single client values from clientStore.
  const singleClient = clientStore((state) => state.singleClient);

  // submiting data
  // const { mutations } = usePostData({
  //   url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${singleClient[0]?.id}/devices`,
  //   queryName: "client_device_info",
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newDeviceSchema),
    defaultValues: {
      size: "10",
      clientId: singleClient[0]?.id,
      name: singleClient[0]?.name,
      email: singleClient[0]?.email,
      location: singleClient[0]?.location,
      phoneNumber: singleClient[0]?.mobile,
    },
  });

  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPost({
      url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${singleClient[0]?.id}/devices`,
      queryName: "client_device_info",
      fn: () => {
        reset({
          deviceId: "",
          imei: "",
          purchaseDate: "",
        });
      },
    });

  const onSubmit = (value) => {
    console.log(value);
    // mutations.mutate({ ...value });

    handleRequest(value, closeFn);
    // mutations.isSuccess &&
    //   queryClient.invalidateQueries({
    //     queryKey: ["main_dashboard_clients_info"],
    //   });
    // clear the input fields
    // mutations.isSuccess &&
    // setTimeout(() => {
    //   reset({
    //     deviceId: "",
    //     imei: "",
    //     purchaseDate: "",
    //     size: "",
    //   });
    // }, 1000);
  };

  useEffect(() => {
    reset({
      deviceId: "",
      imei: "",
      purchaseDate: "",
    });
  }, [isSuccess]);

  return (
    <div className="space-y-3">
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          Device id or Imei id already exist!
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
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
            name={"size"}
            label={"10 inches"}
            register={register}
            id={"10"}
            value={"10"}
          />
          <InputRadioContainer
            errors={errors}
            name={"size"}
            label={"21 inches"}
            register={register}
            id={"21"}
            value={"21"}
          />
        </div>
        {/* Purchase Date and IMEI Number Input */}
        <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Purchase Date"}
            name={"purchaseDate"}
            placeholder="YYYY-MM-DD"
            register={register}
            type="date"
          />
          <InputContainer
            errors={errors}
            label={"IMEI number"}
            name={"imei"}
            register={register}
          />
        </div>
      </Container>
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        {/* <button
          onClick={handleSubmit(onSubmit)}
          className="py-3 col-span-3 text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg btn-animate"
        >
          <IoSaveSharp size={20} />
          <span>Save</span>
        </button> */}
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 col-span-3 disabled:bg-blue-400 disabled:cursor-wait  text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
            isLoading || isSuccess ? "" : "btn-animate"
          } `}
          disabled={isLoading || isSuccess}
        >
          <IoSaveSharp size={20} />
          {/* <span>{btnState.text}</span> */}
          {isLoading && "...saving"}
          {isSuccess && "Done!!!"}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default NewDeviceForm;
