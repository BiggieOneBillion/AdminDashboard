"use client";

import Image from "next/image";
import { useState } from "react";
import ForgetPasswordForm from "./ForgetPasswordForm";
import ResetCodeForm from "./ResetCodeForm";
import NewPasswordForm from "./NewPasswordForm";

const ForgetPassword = () => {
  // state to control which component is displayed in the forget password process
  const [index, setIndex] = useState(1);
  const [userInfo, setUserInfo] = useState({
    email: "",
  });
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
                alt="login-image"
              />
              <Image
                width="231"
                height="231"
                src="/images/photo5.png"
                className="rounded-md  absolute bottom-[60px] right-[20px]"
                alt="login-image"
              />
            </div>

            <div className="mt-12 text-left  w-full">
              <p className="font-bold">Oversee and manage</p>
              <h2 className="text-3xl font-bold text-[#FF971E]">
                Productivity
              </h2>
            </div>
          </div>
          {index === 1 && (
            <ForgetPasswordForm
              setIndex={setIndex}
              userInfo={userInfo}
              setUserInfo={setUserInfo}
            />
          )}
          {index === 2 && <ResetCodeForm setIndex={setIndex} userInfo={userInfo} />}
          {index === 3 && <NewPasswordForm setIndex={setIndex} />}
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
