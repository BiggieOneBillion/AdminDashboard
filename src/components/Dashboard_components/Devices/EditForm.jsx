import React from "react";
import { useForm } from "react-hook-form";
import InputContainer from "@/components/InputComponent";
import { IoSaveSharp } from "react-icons/io5";
import useAxiosPut from "@/hooks/useAxiosPut";

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

function convertDateFormat(dateString) {
  // Split the input date string by '/'
  const [day, month, year] = dateString.split("/");
  // Return the date in ISO format YYYY-MM-DD
  return `${year}-${month}-${day}`;
}

const EditForm = ({ closeBtn, data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    // resolver: zodResolver(newDeviceSchema),
    defaultValues: {
      size: data.size,
      status: data.status,
      deviceId: data.deviceId,
      imei: data.imei,
      purchaseDate: convertDateFormat(
        new Date(data.purchaseDate).toLocaleDateString()
      ),
    },
  });

  const { handleRequest, isError, isLoading, isSuccess } = useAxiosPut({
    queryName: "mutiple_device_info",
    url: `https://api.prestigecalendar.com/api/v1/admin/clients/${data.clientId}/devices/${data.id}`,
  });

  const onSubmit = (value) => {
    const input = { ...value };
    handleRequest(input);
  };
  return (
    <div className="space-y-3 ">
      {isSuccess && (
        <p className="text-green-600 bg-green-300 py-3 text-center w-full text-sm">
          Success
        </p>
      )}
      <Container>
        <div className="grid grid-cols-2 gap-5">
          {/* device id */}
          <InputContainer
            errors={errors}
            label={"Device ID"}
            name={"deviceId"}
            register={register}
          />
          {/* Radio buttons--size */}
          <div className="space-y-3">
            <p className="text-sm text-[rgba(0,0,0,0.7)]">Size</p>
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
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* platform */}
          {/* <InputContainer
            errors={errors}
            label={"Platform"}
            name={"platform"}
            register={register}
          /> */}
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
        {/* Radio buttons--status */}
        <div className="space-y-3 ">
          <p className="text-sm text-[rgba(0,0,0,0.7)]">Status</p>
          <div className="flex items-center justify-start gap-5">
            <InputRadioContainer
              errors={errors}
              name={"status"}
              label={"Active"}
              register={register}
              id={"active"}
              value={"active"}
            />
            <InputRadioContainer
              errors={errors}
              name={"status"}
              label={"Inactive"}
              register={register}
              id={"inactive"}
              value={"inactive"}
            />
          </div>
        </div>
        {/* ram and rom */}
        {/* <div className="grid grid-cols-2 gap-5">
          <InputContainer
            errors={errors}
            label={"Ram"}
            name={"ram"}
            register={register}
            type="number"
          />
          <InputContainer
            errors={errors}
            label={"Rom"}
            name={"rom"}
            register={register}
            type="number"
          />
        </div> */}
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
          {isError && "Try Again"}
        </button>
        {closeBtn}
      </div>
    </div>
  );
};

export default EditForm;
