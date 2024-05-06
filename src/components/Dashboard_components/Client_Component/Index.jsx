"use client"
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { clientBoardData } from "./clientData";
import Board from "./Board";
import { HiPlus } from "react-icons/hi";
import TableSection from "./TableSection";
import NewClientModal from "./NewClientModal";

const Index = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MdOutlineKeyboardBackspace size={20} />
          <h1 className="font-bold">Client</h1>
        </div>
        {/* add new client */}
        <NewClientModal />
      </div>
      <Board boardData={clientBoardData} />
      <TableSection />
    </main>
  );
};

export default Index;
