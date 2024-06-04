import React from "react";
import { HiPlus } from "react-icons/hi";
import NewTemplateForm from "./NewTemplateForm";
import Modal from "@/components/Modal";
import NewTemplateForm1 from "./NewTemplateForm1";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Template</span>
  </div>
);

const NewTemplateModal = () => {
  return (
    <Modal
      content={<NewTemplateForm1 />}
      title={"New Template"}
      trigger={<Trigger />}
    />
  );
};

export default NewTemplateModal;
