import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import EditNewsForm from "./EditNewsForm";
import Modal from "@/components/Modal";
import { useParams } from "next/navigation";
import axios from "axios";
import { userStore } from "@/store/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";

const DeleteNewsModal = ({ clientId, newsId }) => {
  const [btnText, setBtnText] = useState("Delete");
  const token_id = userStore((state) => state.token_id);
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    setBtnText("Deleting....");
    try {
      await axios.delete(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${clientId}/news/${newsId}`,
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
            "Content-Type": "application/json",
          },
        }
      );
      setBtnText("Done!!");
      queryClient.invalidateQueries({ queryKey: ["client_news_info"] });
    } catch (error) {
      //   // console.log(error);
      setBtnText("Try Again");
    }
  };

  const Trigger = () => (
    <div className="border text-sm bg-red-50 text-red-900 flex items-center gap-2 py-1 px-3 rounded-lg w-fit">
      <RiDeleteBinLine size={16} />
      <span className="font-light text-sm">Delete</span>
    </div>
  );

  const DeleteModal = ({ closeBtn }) => (
    <div className=" py-10 w-[500px] rounded-lg bg-white flex flex-col items-center gap-5">
      <h3 className="text-base font-medium">
        Are you sure you want to delete?
      </h3>
      <div className="w-full px-20 grid grid-cols-5 gap-4">
        <button
          onClick={handleDelete}
          className="px-6 rounded-md bg-red-700y border disabled:cursor-none disabled:bg-red-300 border-red-600 text-red-600 py-2 btn-animate col-span-3"
          disabled={btnText == "Deleting...." || btnText == "Try Again"}
        >
          {btnText}
        </button>
        {closeBtn}
      </div>
    </div>
  );

  return (
    <Modal
      content={<DeleteModal />}
      title={""}
      trigger={<Trigger />}
      replace={false}
    />
  );
};

export default DeleteNewsModal;
