import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { RiNotification2Line } from "react-icons/ri";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import Image from "next/image";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import MyDropdownMenu from "./DandEditBtn";

const NotificationDialog = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <div className="border p-2 rounded-md mr-4 relative">
          <RiNotification2Line size={20} />
          <span className="h-2 w-2 inline-block rounded-full bg-red-500 absolute top-2 right-2"></span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-0 right-0 h-screen w-[500px] max-w-fity translate-x-[-50%]y translate-y-[-50%]y rounded-[6px]y bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <section className="px-1 text-black">
            {/* title, back-button, more option  */}
            <div className="flex justify-between items-center py-4">
              {/* back-button icon and notification text */}
              <div className="flex items-center gap-3">
                {/* on click of this button we close this modal */}
                <Dialog.Close className="p-0 m-0">
                  <MdOutlineKeyboardBackspace size={20} />
                </Dialog.Close>
                <h3 className="text-sm font-normal">Notification</h3>
              </div>
              {/* more icon */}
              {/* <IoIosMore size={20} /> */}
              <MyDropdownMenu />
            </div>
            {/* Notification List */}
            <p className="text-center text-2xl font-semibold text-[rgba(0,0,0,0.1)]">No Notification</p>
          </section>
          {/* <Dialog.Close asChild>
          <button
            onClick={closeDialog}
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NotificationDialog;


// <div className="py-4 px-2 border rounded-md flex items-center justify-between bg-[#FBFBFB]">
//               {/* container for the image and information */}
//               <div className="flex justify-start items-start gap-2">
//                 {/* image */}
//                 <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
//                   <Image
//                     src={"/images/blog1.png"}
//                     width={80}
//                     height={120}
//                     alt="notification image"
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 {/* notification short description container */}
//                 <div className="flex flex-col gap-4">
//                   {/* title and short description container */}
//                   <div className="space-y-1">
//                     {/* title */}
//                     <h4 className="font-medium text-sm text-[#3D3D4A]">
//                       Inactive Device
//                     </h4>
//                     {/* short-description */}
//                     <p className="font-normal text-sm text-[#79797B]">
//                       Device has been inactive for 2 weeks
//                     </p>
//                   </div>
//                   {/* date-time-container */}
//                   <div className="flex text-xs items-center gap-4 text-[#D8D8DB]">
//                     <p>23 Jun, 2023</p>
//                     <p>11:34pm</p>
//                   </div>
//                 </div>
//               </div>
//               {/* read more icon */}
//               <div>
//                 <MdOutlineKeyboardArrowRight size={20} />
//               </div>
//             </div>