"use client";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import React from "react";
import TemplateCard from "./TemplateCard";
import axios from "axios";

const TemplateContainer = () => {
  const params = useParams();

  const token_id = userStore((state) => state.token_id);
  const {
    data: templateData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["template_data_info_0987654"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/templates`,
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

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

  // templateData && // console.log(templateData.entity.rows);
  return (
    <>
      {templateData.entity.rows.length > 0 ? (
        <div>
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
