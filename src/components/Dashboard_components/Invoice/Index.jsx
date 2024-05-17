"use client";
import React from "react";
import Board from "../Client_Component/Board";
import { clientBoardData } from "./data";
import TableSection from "./TableSection";
import Modal from "@/components/Modal";
import { HiPlus } from "react-icons/hi";
import NewPaymentForm from "./NewPaymentForm";


const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Invoice</span>
  </div>
);

const Index = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Invoice</h1>
        </div>
        {/* add new client */}
        {/* <Modal
          content={<NewPaymentForm />}
          title={"New Invoice"}
          trigger={<Trigger />}
          width="w-[600px]"
        /> */}
      </div>
      <Board boardData={clientBoardData} />
      <TableSection />
    </main>
  );
};

export default Index;
