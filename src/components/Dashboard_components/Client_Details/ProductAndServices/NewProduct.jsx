import Modal from "@/components/Modal";
import React from "react";
import { HiPlus } from "react-icons/hi";
import NewProductForm from "./NewProductForm";

const Trigger = () => (
  <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
    <HiPlus size={20} />
    <span>New Product</span>
  </div>
);

const NewProduct = () => {
  return (
    <Modal
      content={<NewProductForm />}
      title={"New Product/Service"}
      trigger={<Trigger />}
    />
  );
};

export default NewProduct;
