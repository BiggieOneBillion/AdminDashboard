import Modal from "@/components/Modal";
import React from "react";
import { HiPlus } from "react-icons/hi";
import NewDeviceForm from "./NewDeviceForm";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Device</span>
  </div>
);

const NewDeviceModal = () => {
  return (
    <Modal
      content={<NewDeviceForm />}
      title={"New Device"}
      trigger={<Trigger />}
    />
  );
};

export default NewDeviceModal;
