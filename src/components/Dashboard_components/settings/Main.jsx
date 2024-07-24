"use client";
import React, { useState } from "react";
import Tabs from "./Tabs";
import PIForm from "./forms/PIForm";
import InformationForm from "./forms/InformationForm";

const Main = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="p-10 rounded-lg bg-white space-y-10">
      <Tabs index={index} setIndex={setIndex} />
      {index === 0 && <PIForm />}
      {index === 1 && <InformationForm />}
    </div>
  );
};

export default Main;
