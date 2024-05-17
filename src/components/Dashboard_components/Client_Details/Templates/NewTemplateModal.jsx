import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoIosMore, IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewDeviceForm from "../NewDeviceForm";
import NewTemplateForm from "./NewTemplateForm";
import Modal from "@/components/Modal";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Template</span>
  </div>
);

const NewTemplateModal = () => {
  return (
    <Modal
      content={<NewTemplateForm />}
      title={"New Template"}
      trigger={<Trigger />}
    />
  );
};

export default NewTemplateModal;
