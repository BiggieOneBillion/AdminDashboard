"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Topsection from "./Topsection";
import Main from "./Main";

const index = () => {
  const route = useRouter();

  const handleGoBack = () => route.back();

  return (
    <main className="flex flex-col gap-5">
      <section>
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Settings</h1>
        </div>
        {/* top section */}
        <Topsection />
        {/* main section */}
        <Main />
      </section>
    </main>
  );
};

export default index;
