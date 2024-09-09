import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { newClientSchema } from "@/validation/ClientSectionValidations";
import { zodResolver } from "@hookform/resolvers/zod";

import useAxiosPost from "@/hooks/useAxiosPost";

const NewClientForm = ({ closeBtn, closeFn }) => {
  const { handleRequest, isError, isLoading, isSuccess, errorMsg } =
    useAxiosPost({
      url: "https://api.prestigecalendar.com/api/v1/admin/clients",
      queryName: "clients_info",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(newClientSchema),
  });

  const onSubmit = (value) => {
    handleRequest(value, closeFn);
  };

  useEffect(() => {
    reset({
      email: "",
      name: "",
      location: "",
      mobile: "",
      password: "",
    });
  }, [isSuccess]);

  return (
    <div className="space-y-3">
      {isError && (
        <p className="text-red-600 bg-red-300 py-3 text-center w-full text-sm">
          {/* Credentials already exists */}
          {errorMsg}
        </p>
      )}
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      {/* <InputContainer
        errors={errors}
        label={"Client ID"}
        name={"clientId"}
        register={register}
        isDisabled={true}
      /> */}
      {/* <div className="space-y-2">
        <div className="w-full h-[50px] border border-blue-700 rounded-2xl">
          <label
            htmlFor="imgFile"
            className=" h-full flex px-2 justify-between items-center w-full "
          >
            <input
              type="file"
              id="imgFile"
              // className="hidden"
              {...register("logoUrl", { required: true })}
              accept="image/*"
            />
            <span className="text-sm font-light text-black">
              Upload An Image
            </span>
            <span>
              <PiImageThin size={20} />
            </span>
          </label>
        </div>
        <span className="h-4 text-red-600 text-sm">
          {errors["logoUrl"] && errors["logoUrl"].message}
        </span>
      </div> */}
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
      <InputContainer
        errors={errors}
        label={"Password"}
        name={"password"}
        register={register}
        type="password"
      />
      {/* btn container */}
      <div className="grid grid-cols-5 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 col-span-3 disabled:bg-blue-400 disabled:cursor-wait  text-center text-sm w-full text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
            isSuccess ? "" : "btn-animate"
          } `}
          // disabled={mutations.isPending || mutations.isSuccess}
          disabled={isLoading || isSuccess}
        >
          <IoSaveSharp size={20} />
          {/* <span>{btnState.text}</span> */}
          {/* {mutations.isPending && "...saving"}
          {mutations.isSuccess && "Done!!!"} */}
          {isLoading && "...saving"}
          {isSuccess && "Done!!!"}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default NewClientForm;
