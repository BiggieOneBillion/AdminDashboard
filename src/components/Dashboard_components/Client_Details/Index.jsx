"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import NewClientModal from "./NewDeviceModal";
import NewTemplateModal from "./Templates/NewTemplateModal";
import { useRouter, useParams } from "next/navigation";
import TopBoard from "./TopBoard";
import { clientStore } from "@/store/clients";

const Index = () => {
  const [index, setIndex] = useState(0);

  const router = useRouter();

  const handleGoBack = () => router.back();

  const isTemplate = clientStore((state) => state.isTemplate)

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
        {index == 1 && isTemplate && <NewTemplateModal />}
        {/* {index == 3 && <NewProduct />} */}
      </div>
      <TopBoard />
      <TableSection index={index} setIndex={setIndex} />
    </main>
  );
};

export default Index;
