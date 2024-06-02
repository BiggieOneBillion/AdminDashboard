import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { v4 } from "uuid";
import Image from "next/image";
import { clientStore } from "@/store/clients";

const data = [
  {
    number: 10,
    text: "Device Owned",
  },
  {
    number: 7,
    text: "Active Device",
  },
  // {
  //   number: 1,
  //   text: "Unpaid Invoice",
  // },
  {
    number: 100000,
    text: "Total Revenue",
  },
];

const TopBoard = ({ id }) => {
  // console.log(id);
  const token_id = userStore((state) => state.token_id);
  const updateSingleClientDetails = clientStore(
    (state) => state.updateSingleClientDetails
  );
  const {
    data: clientInfo,
    isLoading,
    isError,
    isSuccess,
    refetch,
  } = useQuery({
    queryKey: ["clients_info"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients?page=1&limit=15",
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
      <div className="w-[100%] h-[200px] bg-[rgba(0,0,0,0.5)]y flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center gap-3 w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data For Analytics. Please Try again
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

  //   {
  //     "id": "888fe7dc-f762-479b-b301-83bc10f8a971",
  //     "name": "Pagac Inc",
  //     "location": "Doyleport",
  //     "email": "Diego83@gmail.com",
  //     "mobile": "936.330.5003 x940",
  //     "about": "Tepidus cursim cur demo bibo suscipit comparo. Thesaurus summopere ulciscor vesica acies. Theca ulciscor tracto tener.\nThorax solum tamdiu molestias. Utrum degenero dedico casso spargo. Supra crastinus nesciunt certe spes amor desparatus tamdiu ulterius adeptio.",
  //     "logoUrl": "https://loremflickr.com/640/480?lock=8361745978490880",
  //     "status": true,
  //     "createdAt": "2024-04-07T11:27:54.933Z",
  //     "updatedAt": "2023-10-25T10:51:20.267Z",
  //     "deletedAt": null,
  //     "devicesCount": 10,
  //     "devicesOwned": 10,
  //     "activeDevices": 10,
  //     "totalAmountPaid": 0
  // }

  //   console.log(data?.entity);
  if (clientInfo?.entity?.data.length > 0) {
    // console.log(clientInfo?.entity?.data);
    const result = clientInfo?.entity?.data.filter((el) => el.id == id);
    // update single client store
    updateSingleClientDetails(result);
    // console.log(result);
    const statisticsData = [
      result[0].devicesOwned,
      result[0].activeDevices,
      result[0].totalAmountPaid,
    ];
    return (
      <div className="w-full grid lg:grid-cols-1 2xl:grid-cols-2 gap-5">
        {/* left side */}
        <div className="w-full grid grid-cols-2 gap-5">
          {/* first container for image, company name, email */}
          <div className="rounded-xl border-4 border-white py-5 px-5 2xl:px-2 flex items-center 2xl:justify-center gap-5 bg-[#f8f8ff]">
            {/* image container */}
            <div className="image-container lg:h-[60px] lg:w-[60px] xl:h-[80px] xl:w-[80px] rounded-full border overflow-hidden">
              <Image
                alt="company logo"
                src={
                  result[0].logoUrl === null
                    ? "/images/no-image-2.png"
                    : result[0].logoUrl
                }
                height={80}
                width={80}
                className="object-cover h-[80px] w-[80px]"
              />
            </div>
            {/* company name and email */}
            <div className="space-y-2">
              <h3 className="font-medium text-base">{result[0].name}</h3>
              <p className="font-light text-sm">{result[0].email}</p>
            </div>
          </div>
          {/* client id, location, mobile */}
          <div className="rounded-xl border-4 border-white py-5 px-5 flex flex-col justify-center  gap-2 bg-[#f8f8ff]">
            {/* client id */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Client ID
              </span>
              <span className="text-sm font-medium text-black uppercase">
                {result[0].id.slice(0, 7)}
              </span>
            </div>
            {/* location */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Location
              </span>
              <span className="text-sm font-medium text-black">
                {result[0].location}
              </span>
            </div>
            {/* mobile */}
            <div className="flex item-center justify-start gap-10 w-full">
              <span className="text-sm font-normal w-[80px] text-[#646464]">
                Mobile
              </span>
              <span className="text-sm font-medium text-black">
                {result[0].mobile}
              </span>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-3 bg-[#FDF6DE] rounded-xl border-4 border-white py-5 px-3">
          {data.map((datum, i) => (
            <div
              key={v4()}
              className="flex flex-col justify-center gap-3 items-center w-full h-full"
            >
              <p className="font-semibold text-2xl text-black">
                {statisticsData[i]}
              </p>
              <p className="font-light text-sm uppercase text-black">
                {datum.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default TopBoard;
