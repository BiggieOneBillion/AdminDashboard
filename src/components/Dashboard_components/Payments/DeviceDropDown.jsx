import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import SelectDropDown from "./SelectDropDown";

const DeviceDropDown = ({ data, getDevice }) => {
//   console.log("clientId: ", data);
  const token_id = userStore((state) => state.token_id);

//   const [selectChange, setSelectChange] = useState("");

//   console.log(selectChange);

  const {
    data: tableData,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [`client_device_info-${data}`],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${data}/devices`,
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

//   console.log(tableData.entity.rows);

  return (
    <div className="flex flex-col items-stretch gap-2 mb-3">
      <p className="text-sm font-light">Device Id List</p>
      {tableData.entity.rows.length > 0 ? (
        <SelectDropDown
          data={tableData.entity.rows}
          setSelectChange={getDevice}
        />
      ) : (
        <p className="font-light text-sm text-red-600">
          No device registered under this client
        </p>
      )}
    </div>
  );
};

export default DeviceDropDown;
