import Modal from "@/components/Modal";
import React from "react";
import { FiEdit } from "react-icons/fi";
import EditPaymentForm from "./EditPaymentForm";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-black font-medium bg-[#24249C]y rounded-lg">
    <FiEdit size={20} />
  </div>
);

const EditPaymentModal = ({ data }) => {
  return (
    <Modal
      content={<EditPaymentForm data={data}/>}
      title={"Edit Payment Information"}
      trigger={<Trigger />}
    />
  );
};

export default EditPaymentModal;
