"use client";

import React from "react";
import { RiNotification2Line } from "react-icons/ri";
import NotificationDialog from "./NotificationDialog";
import { userStore } from "@/store/user";

const Info = () => {
  const user = userStore((state) => state.user);
    // console.log(user);
    // console.log('token', token_id);
  return (
    <div className="right-section-top basis-[80px] lg:px-10  flex items-center gap-5 justify-end bg-white">
      <div className="flex items-center gap-2">
        {/* <div className="border p-2 rounded-md mr-4 relative">
          <RiNotification2Line  size={20}/>
          <span className="h-2 w-2 inline-block rounded-full bg-red-500 absolute top-2 right-2"></span>
        </div> */}
        <NotificationDialog />
        {/* user image container */}
        <div className="w-[40px] h-[40px] rounded-full border overflow-hidden"></div>
        {/* user name and position */}
        <div className="space-y-1">
          <p className="text-sm text-black font-normal">{user.fullname}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
