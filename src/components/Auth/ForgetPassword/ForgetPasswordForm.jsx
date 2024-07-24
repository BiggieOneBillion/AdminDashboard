import InputContainer from "@/components/InputComponent";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { recoverEmailSchema } from "@/validation/loginValidations";
import axios from "axios";
import Image from "next/image";

const ForgetPasswordForm = ({ setIndex, userInfo, setUserInfo }) => {
  // This state handles the btn text and btn disabled state.
  const [btnState, setBtnState] = useState({
    status: false,
    text: "Recover Password",
  });

  const [inCorrect, setInCorrect] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(recoverEmailSchema) });

  const onSubmit = async (values) => {
    setInCorrect(false);
    setBtnState({ ...btnState, status: true, text: "...Loading" });
    try {
      const response = await axios.post(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/forgot-password",
        values
      );
      // console.log(response.data);
      setBtnState({ ...btnState, status: false, text: "Successful!!" });
      setUserInfo({ ...userInfo, email: values.email });
      setIndex(2);
    } catch (error) {
      // console.log(error.response.status);
      if (error.response.status === 422) {
        setBtnState({ ...btnState, status: false, text: "Try Again" });
        setInCorrect(true);
      }
    }
    // setTimeout(()=>{
    //   setIndex(2)
    // },1000)
    //  const loginUser = await loginService({ email, password });
    //  // console.log(loginUser);
  };
  return (
    <div className="w-1/3 grid gap-[60px] py-6 px-12 bg-white ">
      <Image
        width="40"
        height="40"
        src="/images/logo.png"
        className="rounded-md"
        alt="Login Image"
      />
      <div className="">
        <h2 className="font-bold text-[#262633] text-2xl">Forgot Password</h2>
        <p className="text-[#585865]">
          Enter your email address to recover your <br /> password.
        </p>
      </div>
      <form className="gap-[60px] grid">
        <div className="grid gap-[8px]">
          {inCorrect && (
            <span className="block w-full py-2 px-3 rounded-lg bg-red-200 text-red-700 text-sm">
              Incorrect Credentials
            </span>
          )}
          <InputContainer
            label={"Email"}
            name={"email"}
            register={register}
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

        <div className="flex gap-1">
          <p className="text-[#262633]">Go back to</p>{" "}
          <Link href="/" className="text-[#FF971E]">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
