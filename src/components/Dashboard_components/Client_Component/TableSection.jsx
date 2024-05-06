"use client";
import React, { useEffect, useState } from "react";
// import data from "../Customers/mockData.json"
// import axios from "axios";
import mData from "./Table/mData.json";
import { columnData } from "./Table/columnData";
import { CiFilter } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import MyDropdownMenu from "./FilterDropDownMenu";
import Table from "../Main_Dashboard/Main_Table/Tables/Table";




const TableSection = () => {
  const [data, setData] = useState([]);
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  //   useEffect(() => {
  //     axios
  //       .get("/api/user")
  //       .then((res) => setData(res.data.result))
  //       .catch((error) => console.log(error));
  //   }, []);

  // data && console.log(data);
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
          <div className="border p-2 rounded-md mr-4">
            <MyDropdownMenu />
          </div>
        </div>

        <Table
          columnData={columnData}
          mData={mData}
          filterState={filterState}
        />
      </section>
      {/* )} */}
    </div>
  );
};

export default TableSection;

