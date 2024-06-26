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
import Image from "next/image";

const TopTile = ({ icon, title, state }) => (
  <div className="rounded-md p-3 flex items-center justify-between bg-[#E9E9F9]">
    {/* icon and title */}
    <div className="flex items-center gap-3">
      <span>{icon}</span>
      <p className="font-medium text-black">{title}</p>
    </div>
    {/* isActive state: active | inactive */}
    <span
      className={`${
        state === "active"
          ? "text-green-600 bg-green-200"
          : "text-red-600 bg-red-200"
      } text-sm py-1 px-3 rounded-md`}
    >
      {state}
    </span>
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

const TopTile2 = ({ title, subtitle, logoUrl }) => (
  <div className="rounded-md p-3 pb-4 flex items-start justify-start gap-2 bg-[#E9E9F9]">
    {/* image container */}
    <div className="h-[50px] w-[50px] rounded-full border overflow-hidden">
      <Image
        src={logoUrl ? logoUrl : "/images/no-image-2.png"}
        height={50}
        width={50}
        className="h-[50px] w-[50px] object-cover"
        alt="company logo image"
      />
    </div>
    {/* title and subtitle */}
    <div className="space-y-2">
      <p className="font-medium text-black text-sm">{title}</p>
      <p className="font-normal text-xs text-[#646464]">{subtitle}</p>
    </div>
  </div>
);

const DeviceDetailsCard = ({ deviceDetails }) => {
  return (
    <div className="w-[600px] h-fit space-y-10">
      {/* close btn, title, question  */}
      <div className="space-y-10">
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
        <section className="space-y-5">
          <Container>
            <TopTile
              icon={<BsDatabase size={20} />}
              // state={"Active"}
              state={deviceDetails?.entity.status}
              // title={"105KPRW0006234"}
              title={deviceDetails?.entity.deviceId}
            />
            <MainTile
              icon={<TbCapture size={20} />}
              title={"Device Size"}
              // subtitle={"10 inches"}
              subtitle={deviceDetails?.entity.size}
            />
            <MainTile
              icon={<BiBarcode size={20} />}
              title={"IMEI number"}
              // subtitle={345678890998}
              subtitle={deviceDetails?.entity.imei}
            />
          </Container>
          <Container>
            <TopTile2
              title={deviceDetails?.entity.client.name}
              subtitle={deviceDetails?.entity.clientId}
              logoUrl={deviceDetails?.entity.client.logoUrl}
            />
            <MainTile
              icon={<HiOutlineDeviceTablet size={20} />}
              title={"Device name"}
              subtitle={"Device X"}
            />
            <MainTile
              icon={<AiOutlineMail size={20} />}
              title={"Email Address"}
              // subtitle={"sam@gmail.com"}
              subtitle={deviceDetails?.entity.client.email}
            />
            <MainTile
              icon={<PiPhone size={20} />}
              title={"Phone Number"}
              // subtitle={"09037245272"}
              subtitle={deviceDetails?.entity.client.mobile}
            />
            <MainTile
              icon={<GoLocation size={20} />}
              title={"Location"}
              // subtitle={"Port harcourt"}
              subtitle={deviceDetails?.entity.client.location}
            />
          </Container>
          <Container>
            <MainTile
              icon={<GoCalendar size={20} />}
              title={"Date of purchase"}
              // subtitle={"01 / 02 / 2024"}
              subtitle={new Date(
                deviceDetails?.entity.purchaseDate
              ).toLocaleDateString()}
            />
          </Container>
        </section>
      </div>
    </div>
  );
};

export default DeviceDetailsCard;
