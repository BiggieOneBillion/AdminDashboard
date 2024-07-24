"use client";
import React from "react";
import InputContainer from "../../../InputComponent";
import { useForm } from "react-hook-form";

const PIForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="space-y-5">
      <div className="grid md:grid-cols-2 gap-x-5">
        {/* fullname */}
        <InputContainer
          errors={errors}
          label={"Full name"}
          name={"fullname"}
          register={register}
          type="text"
        />
        {/*Address */}

        <InputContainer
          errors={errors}
          label={"Address"}
          name={"address"}
          register={register}
          type="text"
        />
        {/* Email */}

        <InputContainer
          errors={errors}
          label={"Email"}
          name={"email"}
          register={register}
          type="email"
        />
        {/* phone number */}
        <InputContainer
          errors={errors}
          label={"Phone Number"}
          name={"phoneNumber"}
          register={register}
          type="tel"
        />
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
    </div>
  );
};

export default PIForm;
