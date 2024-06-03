"use client";
import React from "react";

import { clientBoardData } from "./data";
import TableSection from "./TableSection";
import Modal from "@/components/Modal";
import NewTemplateModal from "./NewTemplateModal";
import Board from "./Board";

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
