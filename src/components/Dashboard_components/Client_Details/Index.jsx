"use client";
import React, { useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import TableSection from "./TableSection";
import NewClientModal from "./NewDeviceModal";
import { v4 } from "uuid";
import NewTemplateModal from "./Templates/NewTemplateModal";
import NewProduct from "./ProductAndServices/NewProduct";
import { useRouter, useParams } from "next/navigation";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import TopBoard from "./TopBoard";
import { clientStore } from "@/store/clients";

const Index = () => {
  const [index, setIndex] = useState(0);

  const router = useRouter();

  const params = useParams();

  // // console.log(params);

  const handleGoBack = () => router.back();

  const token_id = userStore((state) => state.token_id);

  const isTemplate = clientStore((state) => state.isTemplate)


  // const { data:clientData, isLoading, isError } = useQuery({
  //   queryKey: ["dashboard_info"],
  //   queryFn: async () => {
  //     const response = await axios.get(
  //       `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/255f49a0-5935-4e1e-b6e6-4bd1dd8f65a5`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token_id}`,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     return response.data;
  //   },
  //   staleTime: 5 * 1000,
  // });

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  // if (isError) {
  //   return (
  //     <div className="py-10 flex justify-center items-center w-full">
  //       <p className="px-2 py-1 border text-black text-sm capitalize">
  //         Error while fetching data. Try again
  //       </p>
  //     </div>
  //   );
  // }

  // clientData && // console.log(clientData)

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
      <TopBoard id={params.id} />
      <TableSection index={index} setIndex={setIndex} />
    </main>
  );
};

export default Index;
