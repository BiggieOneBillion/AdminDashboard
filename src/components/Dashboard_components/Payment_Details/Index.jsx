"use  client";
import Modal from "@/components/Modal";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import { useParams, useRouter } from "next/navigation";
import { v4 } from "uuid";
import NewPaymentForm from "./NewPaymentForm";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TopBoard from "./TopBoard";
import api from "@/libs/api_settings";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Payment</span>
  </div>
);

const Index = () => {
  const route = useRouter();

  const handleGoBack = () => route.back();

  const params = useParams();

  const token_id = userStore((state) => state.token_id);
  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["client_payment_info", `${params.id}`],
    queryFn: async () => {
      const response = await api.get(`admin/payments/from/${params.id}?page=1&limit=3`)
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

  // tableData && // console.log(tableData);
  //   {
  //     "count": 0,
  //     "rows": [],
  //     "analytics": {
  //         "client": {
  //             "id": "888fe7dc-f762-479b-b301-83bc10f8a971",
  //             "name": "Pagac Inc",
  //             "location": "Doyleport",
  //             "email": "Diego83@gmail.com",
  //             "mobile": "936.330.5003 x940",
  //             "about": "Tepidus cursim cur demo bibo suscipit comparo. Thesaurus summopere ulciscor vesica acies. Theca ulciscor tracto tener.\nThorax solum tamdiu molestias. Utrum degenero dedico casso spargo. Supra crastinus nesciunt certe spes amor desparatus tamdiu ulterius adeptio.",
  //             "logoUrl": "https://loremflickr.com/640/480?lock=8361745978490880",
  //             "status": true,
  //             "password": "$2a$10$8NuBQwCYh4gX/UPq75P93uDMEleiEgnxNSpsABCs6grgyA8H0L.Mm"
  //         },
  //         "deviceCount": 10,
  //         "incompletePaymentCount": 0,
  //         "totalRevenue": null
  //     }
  // }

  tableData?.entity.rows.forEach((row, index) => {
    row.serial = index + 1;
  });

  const mData = tableData?.entity.rows;

  // console.log(tableData.entity);

  return (
    <main className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button onClick={handleGoBack}>
            <MdOutlineKeyboardBackspace size={20} />
          </button>
          <h1 className="font-bold">Payment Details</h1>
        </div>
        {/* add new payment */}
        <Modal
          content={<NewPaymentForm data={tableData?.entity.analytics.client} />}
          title={"New Payment"}
          trigger={<Trigger />}
          width="w-[600px]"
        />
        {/* {index == 3 && <NewProduct />} */}
      </div>
      {<TopBoard data={tableData?.entity.analytics} />}
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
