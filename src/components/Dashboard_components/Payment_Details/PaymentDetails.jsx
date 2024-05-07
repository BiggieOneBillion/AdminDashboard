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

const TopTile = ({ state = "Incomplete" }) => (
  <div className="rounded-md p-3 flex items-center justify-between box-shadow w-full">
    {/* icon and title */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Transaction ID</p>
      <div className="flex items-center gap-2 text-[#909090]">
        <span>
          <VscArrowSwap size={18} />
        </span>
        <span className="text-xs">0987654321</span>
      </div>
    </div>
    {/* isActive state: active | inactive */}
    <div className="flex flex-col gap-3">
      <p className="font-medium text-sm text-black">Payment Status</p>
      <span
        className={`px-1 py-1 rounded-xl text-xs block text-center ${
          state === "Incomplete"
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

const TopTile2 = ({ title, subtitle }) => (
  <div className="rounded-md p-3 pb-4 flex items-start justify-start gap-2 bg-[#E9E9F9]">
    {/* image container */}
    <div className="h-[50px] w-[50px] rounded-full border"></div>
    {/* title and subtitle */}
    <div className="space-y-2">
      <p className="font-medium text-black text-sm">{title}</p>
      <p className="font-normal text-xs text-[#646464]">{subtitle}</p>
    </div>
  </div>
);

const PaymentDetailsCard = () => {
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
          <TopTile />
          <Container>
            <TopTile2 title={"Total Energies"} subtitle={"PC001"} />
            <MainTile
              icon={<TbCapture size={20} />}
              title={"Device Size"}
              subtitle={"10 inches"}
            />
            <MainTile
              icon={<BsDatabase size={20} />}
              title={"Device ID"}
              subtitle={"105KPRW0006234"}
            />
            <MainTile
              icon={<HiOutlineDeviceTablet size={20} />}
              title={"Device name"}
              subtitle={"Device X"}
            />
          </Container>
          <Container>
            <MainTile
              icon={<GoCalendar size={20} />}
              title={"Date of purchase"}
              subtitle={"01 / 02 / 2024"}
            />
          </Container>
        </section>
        {/* Amount */}
        <p className="mt-20 mb-5 text-center w-full text-3xl font-semibold text-red-500">50,000</p>
      </div>
    </div>
  );
};

export default PaymentDetailsCard;
