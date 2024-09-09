"use client";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TableContainer = ({ children }) => {
  const [data, setData] = useState([]);

  const token_id = userStore((state) => state.token_id);
  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["clients_payment_overall_info"],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.prestigecalendar.com/api/v1/admin/payments?page=1&limit=3`,
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

  tableData.entity.data.forEach((row, index) => {
    row.serial = index + 1;
  });

  const mData = tableData.entity.data;

  // Map through children and clone each element with additional props
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element with additional props
      return React.cloneElement(child, { mData });
    }
    return child; // Return the child as is if not a valid React element
  });

  return <div>{childrenWithProps}</div>;
};

export default TableContainer;
