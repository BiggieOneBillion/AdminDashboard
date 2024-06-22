import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import { editAboutValidation } from "@/validation/ClientSectionValidations";
import useAxiosPut from "@/hooks/useAxiosPut";
import { useParams } from "next/navigation";

const Container = ({ children }) => (
  <div className="p-4 border rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const TextAreaContainer = ({ label, register, name, errors, value }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-[13px] font-light text-[#585865]">
      {label}
    </label>
    <textarea
      className="px-4 w-full py-2 text-base border rounded-xl text-black bg-white disabled:bg-[rgba(233,233,249,0.3)]"
      rows={20}
      value={value}
      {...register(name, { required: true })}
    ></textarea>
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const EditForm = ({ info = "", closeBtn, closeFn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: zodResolver(editAboutValidation),
    defaultValues: {
      description: info,
    },
  });

  const params = useParams();

  console.log(params);

  const { errorMsg, handleRequest, isLoading, isError, isSuccess } =
    useAxiosPut({
      url: `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/about`,
      queryName: "clients_info",
    });

  const onSubmit = (value) => {
    console.log(value);

    handleRequest({ about: value.description }, closeFn);
  };
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
      <TextAreaContainer
        errors={errors}
        label={"Description"}
        name={"description"}
        register={register}
      />{" "}
      {/* btn container */}
      <div className="grid grid-cols-6 gap-5">
        <button
          onClick={handleSubmit(onSubmit)}
          className={`py-3 col-span-4 w-full  text-center text-sm text-white bg-[#24249C]  flex justify-center items-center gap-2 rounded-lg ${
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

export default EditForm;
