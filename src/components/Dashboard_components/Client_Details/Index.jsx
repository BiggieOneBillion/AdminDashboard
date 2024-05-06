"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import NewClientModal from "./NewDeviceModal";
import { v4 } from "uuid";
import NewTemplateModal from "./Templates/NewTemplateModal";
import NewProduct from "./ProductAndServices/NewProduct";
import { useRouter } from "next/navigation";

const Index = () => {
  const data = [
    {
      number: 10,
      text: "Device Owned",
    },
    {
      number: 7,
      text: "Active Device",
    },
    {
      number: 1,
      text: "Unpaid Invoice",
    },
    {
      number: 100000,
      text: "Total Revenue",
    },
  ];

  const [index, setIndex] = useState(0);

  const router = useRouter();

  const handleGoBack = () => router.back();
  
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={handleGoBack}>
            <MdOutlineKeyboardBackspace size={20} />
          </button>
          <h1 className="font-bold">Client</h1>
        </div>
        {/* add new client */}
        {index == 0 && <NewClientModal />}
        {index == 1 && <NewTemplateModal />}
        {/* {index == 3 && <NewProduct />} */}
      </div>
      <div className="w-full grid grid-cols-2 gap-5">
        {/* left side */}
        <div className="w-full grid grid-cols-2 gap-5">
          {/* first container for image, company name, email */}
          <div className="rounded-xl border-4 border-white py-5 px-2 flex items-center justify-center gap-5 bg-[#f8f8ff]">
            {/* image container */}
            <div className="image-container h-[80px] w-[80px] rounded-full border"></div>
            {/* company name and email */}
            <div className="space-y-2">
              <h3 className="font-medium text-base">Total Energies</h3>
              <p className="font-light text-sm">totalenergies@gmail.com</p>
            </div>
          </div>
          {/* client id, location, mobile */}
          <div className="rounded-xl border-4 border-white py-5 px-5 flex flex-col justify-center  gap-2 bg-[#f8f8ff]">
            {/* client id */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Client ID
              </span>
              <span className="text-sm font-medium text-black">PC001</span>
            </div>
            {/* location */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Location
              </span>
              <span className="text-sm font-medium text-black">
                Port Harcourt
              </span>
            </div>
            {/* mobile */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Mobile
              </span>
              <span className="text-sm font-medium text-black">
                +234 90 223 3674
              </span>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-4 bg-[#FDF6DE] rounded-xl border-4 border-white py-5 px-3">
          {data.map((datum) => (
            <div
              key={v4()}
              className="flex flex-col justify-center gap-3 items-center w-full h-full"
            >
              <p className="font-semibold text-2xl text-black">
                {datum.number}
              </p>
              <p className="font-light text-sm uppercase text-black">
                {datum.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <TableSection index={index} setIndex={setIndex} />
    </main>
  );
};

export default Index;
