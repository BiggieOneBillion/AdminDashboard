import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { RiNotification2Line } from "react-icons/ri";

const DeleteModal = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-full">
        <li
          className={`flex items-center w-full gap-1 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out text-red-500 bg-red-200 btn-animate`}
        >
          <span>
            <IoMdClose size={20} />
          </span>
          <span className="font-normal text-sm">Clear all</span>
        </li>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[500px]  max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-lg bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="w-[500px] border rounded-lg h-fit py-10 px-5 space-y-10">
            {/* close btn, title, question  */}
            <div className="space-y-2">
              <Dialog.Close className="block w-full">
                <div className="flex justify-end text-[#191619]">
                  <IoMdClose size={20} />
                </div>
              </Dialog.Close>
              {/* title */}
              <p className="text-base font-semibold text-[#191619]">
                Clear Notifications
              </p>
              <p className="text-sm text-[#191619]">
                Are you sure you want to clear the notification history? This
                action cannot be undone.
              </p>
            </div>
            {/* btn container */}
            <div className="grid grid-cols-2 gap-5 w-full">
              <button className="block text-center py-3 rounded-lg text-base border text-[#191619] bg-[#D8D8DB]y btn-animate">
                Cancel
              </button>
              <button className="block text-center py-3 rounded-lg text-base border border-red-500 text-red-500 bg-[#D8D8DB]y btn-animate">
                Clear
              </button>
            </div>
          </div>

          {/* <Dialog.Close asChild>
        <button
          onClick={closeDialog}
          className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
          aria-label="Close"
        >
          <Cross2Icon />
        </button>
      </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteModal;
