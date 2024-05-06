import React from "react";
import { RiPencilLine } from "react-icons/ri";
import Modal from "@/components/Modal";
import EditNewsForm from "./EditNewsForm";

const Trigger = () => (
  <div className="border border-blue-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
    <RiPencilLine size={16} />
    <span className="font-light text-sm">Edit</span>
  </div>
);

const EditNewsModal = () => {
  return (
    <Modal content={<EditNewsForm />} title={"Edit"} trigger={<Trigger />} />
  );
};

export default EditNewsModal;
