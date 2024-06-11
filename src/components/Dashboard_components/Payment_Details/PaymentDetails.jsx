import React from "react";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import * as Dialog from "@radix-ui/react-dialog";
import { BsDatabase } from "react-icons/bs";
import { TbCapture } from "react-icons/tb";
import { BiBarcode } from "react-icons/bi";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { AiOutlineMail } from "react-icons/ai";
import { PiPhone } from "react-icons/pi";
import { GoLocation } from "react-icons/go";
import { GoCalendar } from "react-icons/go";
import { VscArrowSwap } from "react-icons/vsc";
import Image from "next/image";

const TopTile = ({ isComplete, transactionId }) => (
  <div className="rounded-md p-3 flex items-center justify-between box-shadow w-full">
    {/* icon and title */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Transaction ID</p>
      <div className="flex items-center gap-2 text-[#909090]">
        <span>
          <VscArrowSwap size={18} />
        </span>
        <span className="text-xs">{transactionId}</span>
      </div>
    </div>
    {/* isActive state: active | inactive */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Payment Status</p>
      <span
        className={`px-1 py-1 rounded-xl text-xs block text-center ${
          isComplete ? "text-green-500 bg-green-200" : "text-red-500 bg-red-200"
        }`}
      >
        {isComplete ? "Complete" : "Incomplete"}
      </span>
    </div>
  </div>
);

const MainTile = ({ icon, title, subtitle }) => (
  <div className="rounded-md p-3 flex items-start justify-start gap-2">
    {/* icon */}
    <span>{icon}</span>
    {/* title and subtitle */}
    <div className="space-y-2">
      <p className="font-medium text-black text-sm">{title}</p>
      <p className="font-normal text-xs text-[#646464]">{subtitle}</p>
    </div>
  </div>
);

const Container = ({ children }) => (
  <div className="p-2 border rounded-lg space-y-3">{children}</div>
);

const TopTile2 = ({ title, subtitle, url }) => (
  <div className="rounded-md p-3 pb-4 flex items-start justify-start gap-2 bg-[#E9E9F9]">
    {/* image container */}
    <div className="h-[50px] w-[50px] rounded-full border overflow-hidden">
      <Image
        alt="company-logo"
        src={
          url === null ||
          !url.endsWith(".png") ||
          !url.endsWith(".jpg") ||
          !url.endsWith(".jpeg")
            ? "/images/no-image-2.png"
            : url
        }
        height={50}
        width={50}
        className="object-cover h-[50px] w-[50px]"
      />
    </div>
    {/* title and subtitle */}
    <div className="space-y-2">
      <p className="font-medium text-black text-sm">{title}</p>
      <p className="font-normal text-xs text-[#646464]">{subtitle}</p>
    </div>
  </div>
);

// {
//   "id": "a03afa9d-3bdc-42c5-9dd1-81148dd064da",
//   "clientId": "1f791535-3316-4b74-aea7-6b037ddde504",
//   "transactionId": "TOP692063766YOU",
//   "date": "2024-06-20",
//   "deviceName": "ADFG001",
//   "deviceSize": "21 inches",
//   "deviceId": "678692063766286",
//   "amount": 600000,
//   "isComplete": true,
//   "deletedAt": null,
//   "createdAt": "2024-06-11T18:21:50.682Z",
//   "updatedAt": "2024-06-11T18:29:57.673Z",
//   "client": {
//       "id": "1f791535-3316-4b74-aea7-6b037ddde504",
//       "name": "Blessing Anyebe",
//       "location": "Benue State",
//       "email": "blessinganyebe25@gmail.com",
//       "mobile": "admin@mail.com",
//       "about": null,
//       "logoUrl": null,
//       "status": true,
//       "createdAt": "2024-06-04T14:17:12.633Z",
//       "updatedAt": "2024-06-04T14:17:12.633Z",
//       "deletedAt": null
//   }
// }

// function formatDate(isoDate) {
//   // Create a new Date object from the ISO date string
//   let date = new Date(isoDate);

//   // Get the day, month, and year components
//   let day = date.getUTCDate().toString().padStart(2, "0"); // Use getUTCDate for UTC date
//   let month = (date.getUTCMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
//   let year = date.getUTCFullYear();

//   // Format the date as "dd / mm / yyyy"
//   let formattedDate = `${day} / ${month} / ${year}`;

//   return formattedDate;
// }

const PaymentDetailsCard = ({ data }) => {
  return (
    <div className="w-[600px] h-fit space-y-10">
      {/* close btn, title, question  */}
      <div className="flex flex-col gap-8">
        <div className="flex justify-between items-center py-4">
          {/* back-button icon and notification text */}
          <div className="flex items-center gap-3">
            {/* on click of this button we close this modal */}
            <Dialog.Close className="p-0 m-0">
              <MdOutlineKeyboardBackspace size={20} />
            </Dialog.Close>
            <h3 className="text-sm font-medium">Device details</h3>
          </div>
          {/* more icon */}
          <Dialog.Close className="p-0 m-0">
            <IoMdClose size={20} />
          </Dialog.Close>
        </div>
        {/* New Client Form */}
        <section className="space-y-10">
          <TopTile
            isComplete={data.isComplete}
            transactionId={data.transactionId}
          />
          <Container>
            <TopTile2
              title={data.client.name}
              subtitle={data.client.id}
              url={data.client.logoUrl}
            />
            <MainTile
              icon={<TbCapture size={20} />}
              title={"Device Size"}
              subtitle={data.deviceSize}
            />
            <MainTile
              icon={<BsDatabase size={20} />}
              title={"Device ID"}
              subtitle={data.deviceId}
            />
            <MainTile
              icon={<HiOutlineDeviceTablet size={20} />}
              title={"Device name"}
              subtitle={data.deviceName}
            />
          </Container>
          <Container>
            <MainTile
              icon={<GoCalendar size={20} />}
              title={"Date of purchase"}
              subtitle={data.date}
            />
          </Container>
        </section>
        {/* Amount */}
        <p
          className={`mt-20 mb-5 text-center w-full text-3xl font-semibold  ${
            data.isComplete ? "text-green-500" : "text-red-500"
          }`}
        >
          {data.amount}
        </p>
      </div>
    </div>
  );
};

export default PaymentDetailsCard;
