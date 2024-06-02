import Image from "next/image";
import React from "react";
import { v4 } from "uuid";

const TopBoard = ({ data }) => {

  const analytics = [
    {
      number: data.deviceCount,
      text: "Device Owned",
    },
    {
      number: data.incompletePaymentCount,
      text: "Incomplete Payment",
    },
    {
      number: data.totalRevenue ? data.totalRevenue : 0,
      text: "Total Revenue",
    },
  ];

  //       {
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
                data.client.logoUrl
                  ? data.client.logoUrl
                  : "/images/no-image-2.png"
              }
              width={60}
              height={60}
              className="lg:h-[60px] lg:w-[60px] xl:h-[80px] xl:w-[80px] object-cover"
            />
          </div>
          {/* company name and email */}
          <div className="space-y-2">
            <h3 className="font-medium text-base">{data.client.name}</h3>
            <p className="font-light text-sm">{data.client.email}</p>
          </div>
        </div>
        {/* client id, location, mobile */}
        <div className="rounded-xl border-4 border-white py-5 px-5 flex flex-col justify-center  gap-2 bg-[#f8f8ff]">
          {/* client id */}
          <div className="flex item-center justify-start gap-10 w-full">
            <span className="text-sm font-normal w-[80px] text-[#646464]">
              Client ID
            </span>
            <span className="text-sm font-medium text-black">
              {data.client.id.slice(0, 7)}
            </span>
          </div>
          {/* location */}
          <div className="flex item-center justify-start gap-10 w-full">
            <span className="text-sm font-normal w-[80px] text-[#646464]">
              Location
            </span>
            <span className="text-sm font-medium text-black">
              {data.client.location}
            </span>
          </div>
          {/* mobile */}
          <div className="flex item-center justify-start gap-10 w-full">
            <span className="text-sm font-normal w-[80px] text-[#646464]">
              Mobile
            </span>
            <span className="text-sm font-medium text-black">
              {data.client.mobile}
            </span>
          </div>
        </div>
      </div>
      <div className="w-full grid grid-cols-3 bg-[#FDF6DE] rounded-xl border-4 border-white py-5 px-3">
        {analytics.map((datum) => (
          <div
            key={v4()}
            className="flex flex-col justify-center gap-3 items-center w-full h-full"
          >
            <p className="font-semibold text-2xl text-black">{datum.number}</p>
            <p className="font-light text-sm uppercase text-black">
              {datum.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBoard;
