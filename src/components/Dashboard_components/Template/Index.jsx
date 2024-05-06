"use client";
import React from "react";
import NewTemplateModal from "../Client_Details/Templates/NewTemplateModal";
import Board from "../Client_Component/Board";
import { clientBoardData } from "./data";
import TableSection from "./TableSection";

const Index = () => {
  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Template</h1>
        </div>
        {/* add new client */}
        <NewTemplateModal />
      </div>
      <Board boardData={clientBoardData} />
      <TableSection />
    </main>
  );
};

export default Index;
