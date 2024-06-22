import React from "react";
import { RiPencilLine } from "react-icons/ri";
import EditForm from "./EditForm";
import Modal from "@/components/Modal";

const Trigger = ({ btnText }) => (
  <div className="border border-blue-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
    <RiPencilLine size={16} />
    <span className="font-light text-sm">{btnText}</span>
  </div>
);

const EditAboutModal = ({ data = "" }) => {
  let btnText = data == "" ? "Add New" : "Edit";
  return (
    <Modal
      content={<EditForm info={data} />}
      title={data == "" ? "Add About Section" : "Edit About"}
      trigger={<Trigger btnText={btnText} />}
    />
  );
};

export default EditAboutModal;
