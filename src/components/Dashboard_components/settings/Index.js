"use client";
import React from "react";
import Topsection from "./Topsection";
import Main from "./Main";

const index = () => {


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
