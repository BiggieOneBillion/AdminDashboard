"use client";
import React, { useEffect, useState } from "react";
// import data from "../Customers/mockData.json"
// import axios from "axios";
import mData from "./Main_Table/mData.json";
import { columnData } from "./Main_Table/columnData";
import { CiFilter } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import Table from "./Main_Table/Tables/Table";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { clientStore } from "@/store/clients";

const TableSection = () => {
  // const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");

  const updateAllClientDetails = clientStore(
    (state) => state.updateAllClientDetails
  );

  const filterState = {
    filtering,
    setFiltering,
  };

  // data fetching
  const token_id = userStore((state) => state.token_id);
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["main_dashboard_clients_info"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.prestigecalendar.com/api/v1/admin/clients?page=1&limit=15",
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

  data?.entity?.data && updateAllClientDetails(data?.entity?.data);

  // // console.log(data?.entity.data);

  //   useEffect(() => {
  //     axios
  //       .get("/api/user")
  //       .then((res) => setData(res.data.result))
  //       .catch((error) => // console.log(error));
  //   }, []);

  // data && // console.log(data);
  return (
    <div className="space-y-10 bg-white px-4 py-5 rounded-2xl">
      {/* TABLE */}
      {/* {data.length == 0 && (
        <h1 className="h-[500px] flex justify-center items-center text-2xl font-semibold text-black">
          Loading...
        </h1>
      )} */}
      {/* {data.length > 0 && ( */}
      <section className="table space-y-5 w-full">
        <div className="flex justify-end items-center gap-3 py-4 border-b w-full">
          <div className="flex items-center border px-5 py-1 rounded-2xl">
            <input
              type="text"
              className="w-[200px] py-[2px]y caret-black text-black text-sm outline-none  placeholder:text-xs placeholder:text-subText placeholder:font-semibold  border-gray-200"
              placeholder="Type to search"
              value={filtering}
              onChange={(e) => setFiltering(e.target.value)}
            />
            <button className="border-noney bordery px-2 text-black border-gray-200 py-[6px] text-[17px]">
              <AiOutlineSearch />
            </button>
          </div>
          {/* <div className="border p-2 rounded-md mr-4">
            <CiFilter size={20} />
          </div> */}
        </div>

        <Table
          columnData={columnData}
          mData={data?.entity.data}
          filterState={filterState}
        />
      </section>
      {/* )} */}
    </div>
  );
};

export default TableSection;
