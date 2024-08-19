"use client";

import React from "react";
import { RiNotification2Line } from "react-icons/ri";
import NotificationDialog from "./NotificationDialog";
import { resetAll, userStore } from "@/store/user";
import { MdLogout } from "react-icons/md";
import MyDropdownMenu from "./DropDownMenu";
import axios from "axios";
import { useRouter } from "next/navigation";

const Info = () => {
  const route = useRouter();
  const user = userStore((state) => state.user);
  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/delete-cookies");
      if (response.data.message === "done!!!") {
        route.replace("/");
      }
    } catch (error) {}
  };
  return (
    <div className="right-section-top basis-[80px] lg:px-10  flex items-center gap-5 justify-end bg-white">
      <div className="flex items-center gap-4">
        {/* <div className="border p-2 rounded-md mr-4 relative">
          <RiNotification2Line  size={20}/>
          <span className="h-2 w-2 inline-block rounded-full bg-red-500 absolute top-2 right-2"></span>
        </div> */}
        {/* <NotificationDialog /> */}
        {/* user image container */}
        {/* <div className="w-[40px] h-[40px] rounded-full border overflow-hidden"></div> */}
        {/* user name and position */}
        <div className="space-y-1">
          <p className="text-sm text-black font-medium">{user.fullname}</p>
        </div>
        <MyDropdownMenu>
          <button
            onClick={() => handleLogout()}
            className="py-3 mr-5 mt-5 bg-white px-10 rounded-md border text-sm flex items-center gap-2"
          >
            Log out
            <MdLogout size={20} />
          </button>
        </MyDropdownMenu>
      </div>
    </div>
  );
};

export default Info;
