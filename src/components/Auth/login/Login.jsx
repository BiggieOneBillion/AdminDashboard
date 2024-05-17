"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { loginService } from "../../../services/auth-service/auth.service";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validation/loginValidations";
import axios from "axios";
import cookies_settings from "@/libs/cookies_settings";
import { userStore } from "@/store/user";

const InputContainer = ({ label, register, name, type = "text", errors }) => (
  <div className="flex flex-col gap-2 text-black">
    <label className="capitalize text-sm font-semibold">{label}:</label>
    <input
      type={type}
      className="px-4 w-full py-2 text-base border rounded-md text-black bg-white"
      {...register(name)}
    />
    <span className="h-4 text-red-600 text-sm">
      {errors[name] && errors[name].message}
    </span>
  </div>
);

const Login = () => {
  const router = useRouter();

  // This state handles the btn text and btn disabled state.
  const [btnState, setBtnState] = useState({
    status: false,
    text: "Login",
  });

  const [inCorrect, setInCorrect] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  // from zustand store-- to update the user object and token
  const updateUser = userStore((state) => state.updateUser);
  const setToken = userStore((state) => state.setToken);
  const user = userStore((state) => state.user);
  const token_id = userStore((state) => state.token_id);
  // const { updateUser, setToken } = userStore();

  const onSubmit = async (values) => {
    setInCorrect(false);
    setBtnState({ ...btnState, status: true, text: "...Loading" });
    try {
      const response = await axios.post(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/login",
        values
      );
      console.log(response.data.entity.admin.fullname);
      cookies_settings(response.data);
      setToken(response.data.entity.token);
      let newUser = {
        fullname: response.data.entity.admin.fullname,
        id: response.data.entity.admin.id,
      };
      updateUser(newUser);
      router.push("/dashboard");
      setBtnState({ ...btnState, status: false, text: "Successful!!" });
    } catch (error) {
      // console.log(error);
      if (error.response?.status === 422) {
        setBtnState({ ...btnState, status: false, text: "Try Again" });
        setInCorrect(true);
        return;
      }
      setBtnState({ ...btnState, status: false, text: "Try Again" });
    }
  };

  return (
    <div className="h-screen overflow-hidden flex justify-center items-center bg-[#f1f1f1] border border-red-950 ">
      <div className="container mx-auto ">
        <div className="mx-auto overflow-hidden  flex items-center justify-center gap-2 ">
          <div className="w-1/4 py-10  grid place-items-center   ">
            <div className="relative  w-full">
              <Image
                width="231"
                className="rounded-md"
                height="231"
                src="/images/photo4.png"
                alt="Login Image"
              />
              <Image
                width="231"
                height="231"
                src="/images/photo5.png"
                className="rounded-md  absolute bottom-[60px] right-[20px]"
                alt="Login Image"
              />
            </div>

            <div className="mt-12 text-left  w-full">
              <p className="font-bold">Oversee and manage</p>
              <h2 className="text-3xl font-bold text-[#FF971E]">
                Productivity
              </h2>
            </div>
          </div>

          <div className="w-1/3 grid gap-[60px] py-6 px-12 bg-white ">
            <h1 className=" text-2xl font-bold text-[#FF971E]">Logo</h1>
            <div className="">
              <h2 className="font-bold text-[#262633] text-2xl">Log in</h2>
              <p className="text-[#585865]">
                Enter your credentials below to access your <br /> account
              </p>
            </div>
            <form className="gap-[60px] grid ">
              <div className="grid gap-[8px]">
                {inCorrect && (
                  <span className="block w-full py-2 px-3 rounded-lg bg-red-200 text-red-700 text-sm">
                    Incorrect Credientials
                  </span>
                )}
                {/* <div>
                  <p>User: {user.fullname}</p>
                  <p>token: {token_id}</p>
                </div> */}
                <InputContainer
                  label={"Email"}
                  name={"email"}
                  register={register}
                  errors={errors}
                />

                <InputContainer
                  label={"Password"}
                  name={"password"}
                  register={register}
                  type="password"
                  errors={errors}
                />
                {/* <div className=" mt-1">
                  <input type="checkbox" checked className="mr-1 p-[2px]" />
                  <span className="text-[#262633]">Keep me signed in</span>
                </div> */}
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
                <p className="  text-[#262633]">forgot password? </p>{" "}
                <Link href="/forgetPassword" className="text-[#FF971E]">
                  recover it here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
