import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { PiCornersOut } from "react-icons/pi";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { RiFile2Line } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const TemplateDevice = () => {
  return (
    <section className="w-[600px] h-fit pb-10">
      {/* close btn, title, question  */}
      <div className="space-y-5">
        <header className="flex justify-between items-center py-4">
          {/* back-button icon and notification text */}
          <div className="flex items-center gap-3">
            {/* on click of this button we close this modal */}
            <Dialog.Close className="p-0 m-0">
              <MdOutlineKeyboardBackspace size={20} />
            </Dialog.Close>
            <h3 className="text-sm font-medium">Template details</h3>
          </div>
          {/* more icon */}
          <Dialog.Close className="p-0 m-0">
            <IoMdClose size={20} />
          </Dialog.Close>
        </header>
        {/* main section of the template details */}
        <main className="space-y-5">
          {/* top tile */}
          <section className="shadow-sm space-y-4 py-5 px-3 rounded-xl">
            <div className="flex justify-between items-center text-black text-sm font-medium">
              {/* template-name */}
              <div className="flex flex-col items-start gap-4">
                <p>Total Energies Template 1</p>
                <div className="flex gap-3 items-center text-xs text-gray-400 font-light">
                  <PiCornersOut size={20} />
                  <span>10 inches</span>
                </div>
              </div>
              {/* template-size */}
              <div className="flex flex-col items-start gap-4">
                <p>Template size</p>
                <div className="flex gap-2 items-center text-xs text-gray-400 font-light">
                  <HiOutlineDeviceTablet size={20} />
                  <span>719mb</span>
                </div>
              </div>
            </div>
          </section>
          {/* Images, Transistion delay, transistion order */}
          <section className="border rounded-xl p-3 space-y-5">
            {/* IMAGES */}
            <div className="flex flex-col items-start gap-5 border rounded-xl p-4">
              {/* Image file icon and image name  */}
              <div className="flex items-center gap-2">
                {/* image icon */}
                <span className="text-orange-600 p-1 rounded-full bg-orange-100">
                  <RiFile2Line size={15} />
                </span>
                {/* image text */}
                <p className="text-base font-medium text-black">
                  Total energies images.zip
                </p>
              </div>
              {/* Image size and amount of files */}
              <div className="flex items-center gap-3 text-[10px]">
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  365 files
                </span>
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  718mb
                </span>
              </div>
            </div>
            {/* TRANSISTION DELAY */}
            <div className="flex items-start gap-2">
              <span className="text-gray-600">
                <RiTimerLine size={20} />
              </span>
              <div className="space-y-2">
                <p className="font-medium text-base text-black">
                  Transistion Delay
                </p>
                <p className="font-light text-sm text-gray-500">24 hours</p>
              </div>
            </div>
            {/* TRANSISTION ORDER */}
            <div className="flex items-start gap-2">
              <span className="text-gray-600">
                <RxHamburgerMenu size={20} />
              </span>
              <div className="space-y-2">
                <p className="font-medium text-base text-black">
                  Transistion Order
                </p>
                <p className="font-light text-sm text-gray-500">Shuffle</p>
              </div>
            </div>
          </section>
          {/* Last Section */}
          <section className="border rounded-xl p-3 space-y-5">
            {/* IMAGE DETAILS */}
            <div className="flex flex-col items-start gap-5 border rounded-xl p-4">
              {/* Image file icon and image name  */}
              <div className="flex items-center gap-2">
                {/* image icon */}
                <span className="text-green-600 p-1 rounded-full bg-green-100">
                  <RiFile2Line size={15} />
                </span>
                {/* image text */}
                <p className="text-base font-medium text-black">
                  Total energies images.xslx
                </p>
              </div>
              {/* Image size and amount of files */}
              <div className="flex items-center gap-3 text-[10px]">
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  365 cells
                </span>
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  412kb
                </span>
              </div>
            </div>
             {/* TRANSISTION DELAY */}
             <div className="flex items-start gap-2">
              <span className="text-gray-600">
                <RiTimerLine size={20} />
              </span>
              <div className="space-y-2">
                <p className="font-medium text-base text-black">
                  Transistion Delay
                </p>
                <p className="font-light text-sm text-gray-500">24 hours</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default TemplateDevice;
