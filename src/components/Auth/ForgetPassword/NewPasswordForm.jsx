import InputContainer from "@/components/InputComponent";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { newPasswordSchema } from "@/validation/loginValidations";
import SuccessModal from "./SuccessModal";
import Image from "next/image";

const NewPasswordForm = () => {
  // This state handles the btn text and btn disabled state.
  const [btnState, setBtnState] = useState({
    status: false,
    text: "Save This Password",
  });

  // controls the success modal
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);

  const closeDialog = () => setIsOpen(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(newPasswordSchema) });

  const onSubmit = async (values) => {
    // console.log(values);
    setBtnState({ ...btnState, status: true, text: "...Loading" });
    try {
      const response = await axios.post(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/reset-password",
        values
      );
      // console.log(response.data);
      setBtnState({ ...btnState, status: true, text: "Done" });
      openDialog();
    } catch (error) {
      // console.log(error);
      // if (error.response.status === 422) {
      setBtnState({ ...btnState, status: false, text: "Try Again" });
      // setInCorrect(true);
      // }
    }
    // setTimeout(() => {
    //   setBtnState({ ...btnState, status: true, text: "Done" });
    //   openDialog();
    // }, 1000);

    //  const loginUser = await loginService({ email, password });
    //  // console.log(loginUser);
  };
  return (
    <div className="w-1/3 grid gap-[60px] py-6 px-12 bg-white ">
      {/* <h1 className=" text-2xl font-bold text-[#FF971E]">Logo</h1> */}
      <Image
        width="40"
        height="40"
        src="/images/logo.png"
        className="rounded-md"
        alt="Login Image"
      />
      <div className="">
        <h2 className="font-bold text-[#262633] text-2xl">New Password</h2>
        <p className="text-[#585865]">Create a new password below.</p>
      </div>
      <form className="gap-[60px] grid">
        <div className="grid gap-[8px]">
          <InputContainer
            label={"New Password"}
            name={"newPassword"}
            register={register}
            type="password"
            errors={errors}
          />
          <InputContainer
            label={"Confirm Password"}
            name={"confirmPassword"}
            register={register}
            type="password"
            errors={errors}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full text-center text-white bg-[#24249c] rounded-md py-3 disabled:bg-[rgba(36,36,156,0.4)]"
            onClick={handleSubmit(onSubmit)}
            disabled={btnState.status}
          >
            {btnState.text}
          </button>
        </div>

        <div className=" flex gap-1">
          <p className="  text-[#262633]">Go back to</p>{" "}
          <Link href="/" className="text-[#FF971E]">
            Log In
          </Link>
        </div>
      </form>
      {isOpen && <SuccessModal isOpen={isOpen} closeDialog={closeDialog} />}
    </div>
  );
};

export default NewPasswordForm;
