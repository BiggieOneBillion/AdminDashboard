import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { PiCornersOut } from "react-icons/pi";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { RiFile2Line } from "react-icons/ri";
import { RiTimerLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const TemplateDevice = ({ data }) => {
  console.log(data);
  console.log(data.images.length)
  //   {
  //     "id": "f218ea2a-ba61-455a-901d-c584afb4a13e",
  //     "clientId": "5c04e022-dae4-4852-ae71-61a8e2f0e046",
  //     "screenSize": "10",
  //     "name": "Simply Divine",
  //     "delay": "24 hours",
  //     "order": "shuffle",
  //     "fileSize": "34 mb",
  //     "deletedAt": null,
  //     "createdAt": "2024-06-03T14:46:02.568Z",
  //     "updatedAt": "2024-06-03T14:46:02.568Z",
  //     "quotes": [],
  //     "images": [],
  //     "client": {
  //         "id": "5c04e022-dae4-4852-ae71-61a8e2f0e046",
  //         "name": "Nigeria National Peroleum Corporation",
  //         "location": "Port Harcourt",
  //         "email": "hello@nnpc.com",
  //         "mobile": "+141223344532",
  //         "about": "Total Energies is a multi-energy company that produces and markets fuels, natural gas and electricity. Our 100,000 employees are committed to better energy that is more affordable, more reliable, cleaner and accessible to as many people as possible. Active in more than 130 countries, our ambition is to become the responsible energy major.",
  //         "logoUrl": "https://prestige-calendar-dev.s3.us-east-1.amazonaws.com/logo/e6ee99f6-646d-41ca-b5bc-ea17c65769c2.jpg",
  //         "status": true,
  //         "createdAt": "2024-06-03T13:35:07.204Z",
  //         "updatedAt": "2024-06-03T14:44:38.022Z",
  //         "deletedAt": null
  //     },
  //     "serial": 1
  // }
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
                <p>{data.name}</p>
                <div className="flex gap-3 items-center text-xs text-gray-400 font-light">
                  <PiCornersOut size={20} />
                  <span>{data.screenSize} inches</span>
                </div>
              </div>
              {/* template-size */}
              <div className="flex flex-col items-start gap-4">
                <p>Template size</p>
                <div className="flex gap-2 items-center text-xs text-gray-400 font-light">
                  <HiOutlineDeviceTablet size={20} />
                  <span>{data.fileSize}</span>
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
                  {data.client.name} images.zip
                </p>
              </div>
              {/* Image size and amount of files */}
              <div className="flex items-center gap-3 text-[10px]">
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  {data.images.length} files
                </span>
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  {data.fileSize}
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
                <p className="font-light text-sm text-gray-500">{data.delay}</p>
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
                <p className="font-light text-sm text-gray-500">{data.order}</p>
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
                  {data.client.name}.xslx
                </p>
              </div>
              {/* Image size and amount of files */}
              <div className="flex items-center gap-3 text-[10px]">
                <span className="bg-blue-50 text-gray-500 font-light rounded-lg p-1">
                  {data.quotes.length} cells
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
                <p className="font-light text-sm text-gray-500">{data.delay}</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </section>
  );
};

export default TemplateDevice;
