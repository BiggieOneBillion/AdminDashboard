"use client";
import React from "react";

import { clientBoardData } from "./data";
import TableSection from "./TableSection";
import Modal from "@/components/Modal";
import { HiPlus } from "react-icons/hi";
import NewPaymentForm from "./NewPaymentForm";
import Board from "./Board";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Payment</span>
  </div>
);

const Index = () => {
  const token_id = userStore((state) => state.token_id);
  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["clients_payment_overall_info"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.prestigecalendar.com/api/v1/admin/payments?page=1&limit=3`,
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
            "Content-Type": "application/json",
          },
        }
      );
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

  // tableData &&  console.log(tableData);

  tableData.entity.data.forEach((row, index) => {
    row.serial = index + 1;
  });

  const mData = tableData.entity.data;

  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">Payment</h1>
        </div>
        {/* add new client */}
        <Modal
          content={<NewPaymentForm />}
          title={"New Payment"}
          trigger={<Trigger />}
          width="w-[600px]"
        />
      </div>
      <Board
        boardData={clientBoardData}
        analytics={tableData.entity.analytics}
      />
      <TableSection data={mData} />
    </main>
  );
};

export default Index;
