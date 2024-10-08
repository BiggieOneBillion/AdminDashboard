"use client";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import TemplateCard from "./TemplateCard";
import axios from "axios";
import { v4 } from "uuid";
import { clientStore } from "@/store/clients";
import api from "@/libs/api_settings";

const TemplateContainer = () => {
  const params = useParams();

  const updateIsTemplate = clientStore((state) => state.updateIsTemplate)

  const {
    data: templateData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["template_data_info_0987654", params.id],
    queryFn: async () => {
      const response = await api.get(`admin/clients/${params.id}/templates`)
      return response.data;
    },
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

  templateData?.entity?.rows.length === 0  ? updateIsTemplate(true) : updateIsTemplate(false)


  return (
    <>
      {templateData.entity.rows.length > 0 ? (
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-5">
          {templateData.entity.rows.map((row) => (
            <TemplateCard data={row} key={v4()}/>
          ))}
        </div>
      ) : (
        <p className="text-3xl h-[200px] font-extrabold text-[rgba(0,0,0,0.1)] text-center">
          No Template Avaliable
        </p>
      )}
    </>
  );
};

export default TemplateContainer;
