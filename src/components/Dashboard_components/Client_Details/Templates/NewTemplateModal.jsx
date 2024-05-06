import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoIosMore, IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewDeviceForm from "../NewDeviceForm";
import NewTemplateForm from "./NewTemplateForm";

const NewTemplateModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-fit">
        <div className="flex items-center gap-3 py-3 px-4 text-white font-medium bg-[#24249C] rounded-lg">
          <HiPlus size={20} />
          <span>New Template</span>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[95hv] overflow-y-scroll max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#D8D8DB]y bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="w-[800px] h-fit pb-4 px-5 space-y-10">
            {/* close btn, title, question  */}
            <div className="space-y-10">
              <div className="flex justify-between items-center py-4">
                {/* back-button icon and notification text */}
                <div className="flex items-center gap-3">
                  {/* on click of this button we close this modal */}
                  <Dialog.Close className="p-0 m-0">
                    <MdOutlineKeyboardBackspace size={20} />
                  </Dialog.Close>
                  <h3 className="text-sm font-medium">New Template</h3>
                </div>
                {/* more icon */}
                <Dialog.Close className="p-0 m-0">
                  <IoMdClose size={20} />
                </Dialog.Close>
              </div>
              {/* New Client Form */}
              <NewTemplateForm />
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default NewTemplateModal;
