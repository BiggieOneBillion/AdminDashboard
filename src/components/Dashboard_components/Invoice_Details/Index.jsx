"use  client";
import Modal from "@/components/Modal";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import { useParams, useRouter } from "next/navigation";
import { v4 } from "uuid";
import NewPaymentForm from "./NewInvoiceForm";
// import TopBoard from "./TopBoard";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user";
import axios from "axios";
import api from "@/libs/api_settings";
import TopBoard from "../Client_Details/TopBoard";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Invoice</span>
  </div>
);

const Index = () => {
  // const data = [
  //   {
  //     number: 10,
  //     text: "Device Owned",
  //   },
  //   {
  //     number: 7,
  //     text: "Active Device",
  //   },
  //   {
  //     number: 1,
  //     text: "Unpaid Invoice",
  //   },
  //   {
  //     number: 100000,
  //     text: "Total Revenue",
  //   },
  // ];

  const params = useParams();
  const route = useRouter();

  const handleGoBack = () => route.back();

  const token_id = userStore((state) => state.token_id);



  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["client_invoice_info", `${params.id}`],
    queryFn: async () => {
      const response = await api.get(`admin/invoices/for/${params.id}?page=1&limit=10`)
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

  tableData && console.log(tableData);

  
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
          title={"New Invoice"}
          trigger={<Trigger />}
          width="w-[600px]"
        />
        {/* {index == 3 && <NewProduct />} */}
      </div>
      <TopBoard id={params.id} />
      {tableData.entity.rows.length > 0 ? <TableSection data={tableData?.entity?.rows}/> : (
        <p className="text-center text-3xl font-extrabold text-[rgba(0,0,0,0.1)] py-10">
          No Invoice Details Avaliable
        </p>
      )}
    </main>
  );
};

export default Index;
