import InputContainer from "@/components/InputComponent";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { recoverCodeSchema } from "@/validation/loginValidations";
import axios from "axios";

const ResetCodeForm = ({ setIndex, userInfo }) => {
  // This state handles the btn text and btn disabled state.
  const [btnState, setBtnState] = useState({
    status: false,
    text: "Reset Password",
  });

  const [inCorrect, setInCorrect] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const [disableInput, setDisableInput] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: zodResolver(recoverCodeSchema) });

  const onSubmit = async (values) => {
    setInCorrect(false);
    // console.log(values.code, userInfo.email);

    setBtnState({ ...btnState, status: true, text: "...Loading" });
    try {
      const response = await axios.post(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/verify-otp",
        { email: userInfo.email, otp: values.code }
      );
      // console.log(response.data);
      setBtnState({ ...btnState, status: false, text: "Successful!!" });
      setIndex(3);
    } catch (error) {
      // // console.log(error.response.data.message);
      if (error.response.status === 403) {
        setErrorMessage(error.response.data.message);
        setBtnState({ ...btnState, status: false, text: "Try Again" });
        setInCorrect(true);
      }

      if (
        error.response.data.message ===
        "Otp usage finished, request a new OTP, or contact service providers for help."
      ) {
        setDisableInput(true);
      }
    }
    // setTimeout(() => {
    //   setIndex(3);
    // }, 1000);
    //  const loginUser = await loginService({ email, password });
    //  // console.log(loginUser);
  };
  return (
    <div className="w-1/3 grid gap-[60px] py-6 px-12 bg-white ">
      <h1 className=" text-2xl font-bold text-[#FF971E]">Logo</h1>
      <div className="">
        <h2 className="font-bold text-[#262633] text-2xl">
          Notify your super admin
        </h2>
        <p className="text-[#585865]">
          Password reset code was sent to your Super
          <br /> Admin&apos;s email address.
        </p>
      </div>
      <form className="gap-[60px] grid">
        <div className="grid gap-[8px]">
          {inCorrect && (
            <span className="block w-full py-2 px-3 rounded-lg bg-red-200 text-red-700 text-sm">
              {errorMessage}
            </span>
          )}
          <InputContainer
            label={"Enter Code"}
            name={"code"}
            register={register}
            errors={errors}
            type="number"
            isDisabled={disableInput}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full text-center text-white bg-[#24249c] rounded-md py-3 disabled:bg-[rgba(36,36,156,0.4)]"
            onClick={handleSubmit(onSubmit)}
            disabled={btnState.status || disableInput}
          >
            {btnState.text}
          </button>
        </div>

        <div className=" flex gap-1">
          <p className="  text-[#262633] pr-[2px]">Go back to</p>
          <Link href="/" className="text-[#FF971E]">
            Log In
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ResetCodeForm;
