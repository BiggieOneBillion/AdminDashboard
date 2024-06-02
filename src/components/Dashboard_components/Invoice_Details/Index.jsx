"use  client";
import Modal from "@/components/Modal";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";
import NewPaymentForm from "./NewPaymentForm";
import TopBoard from "./TopBoard";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Payment</span>
  </div>
);

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

  const route = useRouter();

  const handleGoBack = () => route.back();
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={handleGoBack}>
            <MdOutlineKeyboardBackspace size={20} />
          </button>
          <h1 className="font-bold">Invoice Details</h1>
        </div>
        {/* add new payment */}
        <Modal
          content={<NewPaymentForm />}
          title={"New Payment"}
          trigger={<Trigger />}
          width="w-[600px]"
        />
        {/* {index == 3 && <NewProduct />} */}
      </div>
      <TopBoard />
      <TableSection />
    </main>
  );
};

export default Index;
