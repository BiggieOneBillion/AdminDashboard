import React from "react";
import { v4 } from "uuid";
import Card from "../Card";
import { useQuery } from "@tanstack/react-query";
import { userStore } from "@/store/user";
import { useParams } from "next/navigation";
import axios from "axios";
import AddNewsModal from "./AddNews";

const News = () => {
  // const count = [1, 2, 3, 4, 5, 6, 7];
  const params = useParams();

  // // console.log(params);

  const token_id = userStore((state) => state.token_id);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["client_news_info"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/news?page=1&limit=2`,
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
    // console.log(error);
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

  // data && // console.log(data);

  // console.log(data);

  return (
    <div className="space-y-5">
      {/* title and edit icon */}
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg text-black">News</h1>
        <AddNewsModal />
      </div>
      {/* description */}
      <p className="service-description font-normal text-sm text-[#646464] leading-[1.8]"></p>
      {/* cards */}
      {data?.entity.rows.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {data?.entity.rows.map((el) => (
            <Card datum={el} key={v4()} />
          ))}
        </div>
      ) : (
        <p className="text-3xl font-extrabold text-[rgba(0,0,0,0.1)] text-center">
          No News Avaliable
        </p>
      )}
    </div>
  );
};

export default News;
