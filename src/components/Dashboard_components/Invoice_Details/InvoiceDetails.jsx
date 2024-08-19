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
import Table from "./CardTable";
import { LuPrinter } from "react-icons/lu";

const TopTile = ({ state = "incomplete", invoiceId }) => (
  <div className="rounded-md p-3 flex items-center justify-between w-full">
    {/* icon and title */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Invoice ID</p>
      <div className="text-[#909090]">
        <span className="text-xs">{invoiceId}</span>
      </div>
    </div>
    {/* isActive state: active | inactive */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Invoice Status</p>
      <span
        className={`px-1 py-1 rounded-xl text-xs block text-center ${
          state === "incomplete"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {state}
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

const TopTile2 = ({ title, subtitle = "", imgUrl = "" }) => (
  <div className="rounded-md p-3 pb-4 flex items-center justify-start gap-2 bg-[#E9E9F9]">
    {/* image container */}
    <div className="h-[50px] w-[50px] rounded-full border overflow-hidden">
      {imgUrl.endsWith(".png") ||
      imgUrl.endsWith(".jpg") ||
      imgUrl.endsWith(".jpeg") ? (
        <Image src={imgUrl} width={50} height={50} alt="company logo" className="h-full w-full" />
      ) : (
        <Image
          alt="company logo"
          src={"/images/no-image-2.png"}
          width={50}
          height={50}
          className="h-full w-full"
        />
      )}
    </div>
    {/* title and subtitle */}
    <div className="space-y-2">
      <p className="font-medium text-black text-sm">{title}</p>
      {subtitle && (
        <p className="font-normal text-xs text-[#646464]">{subtitle}</p>
      )}
    </div>
  </div>
);

const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "description",
    header: "Description",
    accessorKey: "description",
    cell: ({ row }) => (
      <span className="text-xs">{row.original.description}</span>
    ),
  },
  {
    id: "size",
    header: "Device Size",
    accessorKey: "size",
  },
  {
    id: "quantity",
    header: "Quantity",
    accessorKey: "quantity",
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
  },
];


const InvoiceDetailsCard = ({ info }) => {
  const totalAmount = info.details
    .map((el) => el.amount)
    .reduce((prev, cur) => prev + cur, 0);

  // include serial number in the data set.
  info.details.forEach((row, index) => {
    row.serial = index + 1;
  });

  return (
    <div className="w-[600px] max-h-[90vh] space-y-10 overflow-y-scroll">
      {/* close btn, title, question  */}
      <div className="flex flex-col gap-8 overflow-y-scroll">
        <div className="flex justify-between items-center py-4">
          {/* back-button icon and notification text */}
          <div className="flex items-center gap-3">
            {/* on click of this button we close this modal */}
            <Dialog.Close className="p-0 m-0">
              <MdOutlineKeyboardBackspace size={20} />
            </Dialog.Close>
            <h3 className="text-sm font-medium">Invoice details</h3>
          </div>
          {/* more icon */}
          <div className="flex justify-start items-center gap-5">
            {/* <button className="border-none">
              <LuPrinter size={20} />
            </button> */}
            <Dialog.Close className="p-0 m-0">
              <IoMdClose size={20} />
            </Dialog.Close>
          </div>
        </div>
        {/* New Client Form */}
        <section className="space-y-5">
          <TopTile invoiceId={info.invoiceId} state={info.status} />
          <div className="space-y-4 border-b pb-5">
            {/* company details */}
            <Container>
              <div className="space-y-4">
                <TopTile2 title={"Prestige Calendar"} />
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-light">
                    email@gmail.com
                  </p>
                  <p className="text-xs text-gray-500 font-light">
                    +234 567 890
                  </p>
                  <p className="text-xs text-gray-500 font-light">
                    Port Harcourt
                  </p>
                </div>
              </div>
            </Container>
            {/* client details */}
            <Container>
              <div className="space-y-4">
                <TopTile2 title={info.client.name} subtitle={info.clientId} />
                <div className="space-y-2">
                  <p className="text-xs text-gray-500 font-light">
                    {info.client.email}
                  </p>
                  <p className="text-xs text-gray-500 font-light">
                    {info.client.mobile}
                  </p>
                  <p className="text-xs text-gray-500 font-light">
                    {info.client.location}
                  </p>
                </div>
              </div>
            </Container>
          </div>
          <section className="space-y-5">
            <Table columnData={columnData} mData={info.details} />
            <div className="flex justify-end gap-10 items-center pr-14">
              <p className="font-normal text-sm text-[rgba(0,0,0,0.3)]">
                Total Amount
              </p>
              <p className="font-semibold text-sm text-black">#{totalAmount}</p>
            </div>
          </section>
        </section>
        {/* Note Warning */}
        {/* <div className="space-y-1 mt-5 mb-5">
          <p className=" font-medium">Note</p>
          <p className="border rounded-xl text-xs text-[rgba(0,0,0,0.3)] py-2 px-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            architecto, possimus voluptates commodi doloribus explicabo error
            sit odio obcaecati deleniti! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Soluta ad obcaecati eum quibusdam, neque voluptate
            consequuntur blanditiis cum ex reprehenderit.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default InvoiceDetailsCard;
