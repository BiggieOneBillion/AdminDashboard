import React from "react";
import { RiPencilLine } from "react-icons/ri";
import Modal from "@/components/Modal";
import EditServiceForm from "./EditServiceForm";
import EditServiceForm2 from "./EditServiceForm2";

const Trigger = ({ text }) => (
  <div className="border border-blue-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
    <RiPencilLine size={16} />
    <span className="font-light text-sm">{text}</span>
  </div>
);

// "entity": {
//         "id": "855e1768-8a21-411e-9c76-8150c7ecad2e",
//         "description": null,
//         "images": null,
//         "client": {
//             "id": "5f7d058f-83a3-40ed-bbce-9e4ab525841d",
//             "name": "bolt ng",
//             "location": "lagos",
//             "email": "bolt@gmail.com",
//             "mobile": "09087650000",
//             "about": "Precios is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
//             "logoUrl": null,
//             "status": true
//         }
//     }

const EditServiceModal = ({ data }) => {
  const modalTitle =
    data.description == null && (data.images == null || data.images.length == 0)
      ? "Add"
      : "Edit";
  return (
    <Modal
      content={data ? <EditServiceForm2 data={data}/> : <EditServiceForm />}
      title={modalTitle}
      trigger={<Trigger text={modalTitle} />}
    />
  );
};

export default EditServiceModal;
