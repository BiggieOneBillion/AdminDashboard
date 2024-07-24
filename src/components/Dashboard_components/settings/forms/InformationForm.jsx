"use client";
import React from "react";
import { useForm } from "react-hook-form";

const InputRadioContainer = ({
  label,
  register,
  name,
  errors,
  id,
  value,
  type,
}) => (
  <div className="flex flex-col gap-2 text-black">
    <div className="flex items-center justify-start gap-2">
      <input
        id={id}
        type={type}
        value={value}
        className="px-4 w-fit py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)] "
        {...register(name)}
      />
      <label
        htmlFor={id}
        className="capitalize text-[13px]y text-sm font-normal text-[#585865]y text-gray-900  flex justify-start items-center gap-3"
      >
        {type === "radio" && (
          <div className="circle h-4 w-4 rounded-full border-2 border-blue-900 overflow-hidden">
            <span className="block h-full w-full border-2 border-white rounded-full"></span>
          </div>
        )}
        <span>{label}</span>
      </label>
    </div>
    {/* <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span> */}
  </div>
);

const InformationForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <section className="space-y-10">
      {/* where you receive notification */}
      <div className="border rounded-lg p-5 space-y-5">
        <p className="font-semibold text-normal text-black">
          Where you receive notification?
        </p>
        <div className="space-y-6">
          <InputRadioContainer
            type={"radio"}
            label={"Email"}
            name={"notification"}
            register={register}
            id={"email-Id"}
            value={"email"}
            errors={errors}
          />
          <InputRadioContainer
            type={"radio"}
            label={"In-app"}
            name={"notification"}
            register={register}
            id={"in-app"}
            value={"in-app"}
            errors={errors}
          />
          <InputRadioContainer
            type={"radio"}
            label={"Both"}
            name={"notification"}
            register={register}
            id={"both"}
            value={"both"}
            errors={errors}
          />
        </div>
      </div>
      {/* What notification you receive */}
      <div className="border rounded-lg p-5 space-y-5">
        <p className="font-semibold text-normal text-black">
          What notification you receive?
        </p>
        <div className="space-y-6">
          <InputRadioContainer
            type={"checkbox"}
            label={"When a device stays inactive for 2weeks"}
            name={"When a device stays inactive for 2weeks"}
            register={register}
            id={"inactive"}
            value={"When a device stays inactive for 2weeks"}
            errors={errors}
          />
          <InputRadioContainer
            type={"checkbox"}
            label={"When an invoice is due"}
            name={"notification"}
            register={register}
            id={"in-app"}
            value={"in-app"}
            errors={errors}
          />
          <InputRadioContainer
            type={"checkbox"}
            label={"When a new client is added"}
            name={"notification"}
            register={register}
            id={"both"}
            value={"both"}
            errors={errors}
          />
           <InputRadioContainer
            type={"checkbox"}
            label={"When a new device is added"}
            name={"notification"}
            register={register}
            id={"both"}
            value={"both"}
            errors={errors}
          />
        </div>
      </div>
      {/* action button container */}
      <div className="flex justify-end gap-5 items-center">
        <button className="border-none py-3 px-6 text-normal font-normal bg-blue-800 text-white rounded-md">
          Update
        </button>
        <button className=" py-3 px-6 text-normal font-normal border text-black rounded-md">
          Cancel
        </button>
      </div>
    </section>
  );
};

export default InformationForm;
