import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import InvoiceDetailsCard from "./InvoiceDetails";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";

const InvoiceDetailsModal = ({ data, header }) => {
  // remmember to fetch the data necessay using tanstack query to display the device data
  const token_id = userStore((state) => state.token_id);

  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["clients_single_invoice_info", `${data.id}`],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/invoices/${data.id}`,
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
          Invalid Id
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

  // console.log(tableData);



  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-fit">
        <span>{header}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[500px]y  max-w-fit translate-x-[-50%] translate-y-[-50%]  bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <InvoiceDetailsCard info={tableData.entity}/>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default InvoiceDetailsModal;