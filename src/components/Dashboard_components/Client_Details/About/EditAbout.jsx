import React from "react";
import { RiPencilLine } from "react-icons/ri";
import EditForm from "./EditForm";
import Modal from "@/components/Modal";

const Trigger = () => (
  <div className="border border-blue-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
    <RiPencilLine size={16} />
    <span className="font-light text-sm">Edit</span>
  </div>
);

const EditAboutModal = () => {
  return <Modal content={<EditForm />} title={"Edit"} trigger={<Trigger />} />;
};

export default EditAboutModal;
