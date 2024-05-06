import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoIosMore, IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewClientForm from "../Client_Component/NewClientForm";
import DeviceDetailsCard from "./DeviceDetailsCard";

const DeviceDetailsModal = ({ data, header }) => {
  // remmember to fetch the data necessay using tanstack query to display the device data
  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-fit">
        <span>{header}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[500px]y  max-w-fit translate-x-[-50%] translate-y-[-50%]  bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <DeviceDetailsCard />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeviceDetailsModal;
