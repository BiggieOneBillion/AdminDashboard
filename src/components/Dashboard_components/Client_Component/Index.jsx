"use client";
import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { clientBoardData } from "./clientData";
import Board from "./Board";
import TableSection from "./TableSection";
import NewClientModal from "./NewClientModal";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user";
import axios from "axios";

const Index = () => {
  const token_id = userStore((state) => state.token_id);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["clients_info"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients?page=1&limit=15",
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
      <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError || data === undefined || data?.entity.data === undefined) {
    // // console.log(data);
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

  // console.log(data?.entity);

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
      <Board boardData={clientBoardData} data={data?.entity?.analytics} />
      <TableSection data={data?.entity?.data} />
    </main>
  );
};

export default Index;
