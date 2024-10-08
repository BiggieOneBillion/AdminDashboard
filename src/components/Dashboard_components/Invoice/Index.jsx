"use client";
import React from "react";
import { clientBoardData } from "./data";
import TableSection from "./TableSection";
import Modal from "@/components/Modal";
import { HiPlus } from "react-icons/hi";
// import Board from "./Board";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import NewInvoiceForm from "./NewInvoiceForm";
import api from "@/libs/api_settings";
import Board from "../Devices/Board";
import BoardContainer from "@/components/BoardContainer";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Invoice</span>
  </div>
);

const Index = () => {
  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["clients_invoice_overall_info_table_data"],
    queryFn: async () => {
      const response = await api.get("admin/invoices?page=1&limit=10");
      return response.data;
    },
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return (
      <div className=" h-[100%] bg-[rgba(0,0,0,0.5)]y flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError || tableData === undefined) {
    return (
      <div className="py-10 flex justify-center gap-3 items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
        <button
          onClick={() => refetch()}
          className="border rounded-sm font-medium text-black text-sm px-4 py-2 bg-transparent active:scale-95 transition-transform duration-200 ease-in-out"
        >
          ReLoad
        </button>
      </div>
    );
  }

  tableData.entity.rows.forEach((row, index) => {
    row.serial = index + 1;
  });

  const mData = tableData.entity.rows;

  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Invoice</h1>
        </div>
        {/* add new client */}
        <Modal
          content={<NewInvoiceForm />}
          title={"New Invoice"}
          trigger={<Trigger />}
          width="w-[600px]"
        />
      </div>
      <BoardContainer>
        <Board />
      </BoardContainer>
      {mData.length > 0 ? (
        <TableSection data={mData} />
      ) : (
        <p className="font-semibold text-3xl text-[rgba(0,0,0,0.1)] h-[200px] text-center w-full">
          No Table Info Avaliable
        </p>
      )}
    </main>
  );
};

export default Index;
