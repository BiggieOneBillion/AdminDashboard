import Modal from "@/components/Modal";
import React from "react";
import { FiEdit } from "react-icons/fi";
import NewDeviceForm from "./NewDeviceForm";
import EditForm from "./EditForm";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-black font-medium bg-[#24249C]y rounded-lg">
    <FiEdit size={20} />
  </div>
);

const EditDeviceModal = ({data}) => {
  return (
    <Modal
      content={<EditForm data={data} />}
      title={"Edit Device Information"}
      trigger={<Trigger />}
    />
  );
};

export default EditDeviceModal;
