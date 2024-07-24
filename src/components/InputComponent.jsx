
const InputContainer = ({ label, register, name, type = "text", errors, isDisabled=false, placeholder="" }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-[13px] font-normal text-[#585865]">{label}</label>
    <input
      type={type}
      className="px-4 w-full py-3 text-base border outline-none rounded-2xl text-black bg-white disabled:text-slate-300 disabled:bg-[rgba(233,233,249,0.3)] placeholder:text-sm "
      disabled={isDisabled}
      placeholder={placeholder}
      {...register(name, { required: "required field*" })}
    />
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);


export default InputContainer