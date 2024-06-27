import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "@/components/Modal";
import { useParams } from "next/navigation";
import axios from "axios";
import { userStore } from "@/store/user";
import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { IoCheckmarkDone } from "react-icons/io5";

const MarkAsCompletedModal = ({ id }) => {
  const [btnText, setBtnText] = useState("Mark As Read");
  const token_id = userStore((state) => state.token_id);
  const queryClient = useQueryClient();

  console.log(token_id);

  const params = useParams();

  const handleMarkAsCompleted = async () => {
    setBtnText("processing....");
    try {
      await axios.patch(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/invoices/${id}`,{},
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
          },
        }
      );
      setBtnText("Done!!");
      queryClient.invalidateQueries({
        queryKey: ["client_invoice_info", params.id],
      });
    } catch (error) {
        console.log(error);
      setBtnText("Try Again");
    }
  };

  const Trigger = () => (
    <div className="bordery text-sm  flex items-center gap-2 py-1 px-3 ">
      <IoCheckmarkDone size={16} />
      <span className="font-light text-sm">Mark As Completed</span>
    </div>
  );

  const CompletedModal = ({ closeBtn }) => (
    <div className=" py-10 w-[500px] rounded-lg bg-white flex flex-col items-center gap-5">
      <h3 className="text-base font-medium">
        Are you sure you want to mark as completed?
      </h3>
      <div className="w-full px-20 grid grid-cols-5 gap-4">
        <button
          onClick={handleMarkAsCompleted}
          className="px-6 rounded-md bg-red-700y border disabled:cursor-none disabled:bg-blue-300 border-blue-600 text-blue-600 py-2 btn-animate col-span-3"
          disabled={btnText == "processing...."}
        >
          {btnText}
        </button>
        {closeBtn}
      </div>
    </div>
  );

  return (
    <Modal
      content={<CompletedModal />}
      title={""}
      trigger={<Trigger />}
      replace={false}
    />
  );
};

export default MarkAsCompletedModal;
