import { Cross2Icon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { FaCheck } from "react-icons/fa6";
import { RiCheckFill } from "react-icons/ri";

import { useRouter } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";

const SuccessModal = ({ isOpen, closeDialog }) => {
  const router = useRouter();
  const handleRoute = () => {
    router.replace("/");
    closeDialog();
  };
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="lg:min-w-[500px] px-10 py-8 flex flex-col items-center rounded-md bg-white text">
            {/* icons and successful text */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="bg-green-600 text-white p-2 w-fit rounded-full">
                <RiCheckFill size={40} />
              </div>
              <h2 className="text-2xl font-semibold text-black">Successful</h2>
            </div>
            <p className="font-normal text-sm mt-5 ">
              Your new password has been created
            </p>
            <button
              onClick={() => handleRoute()}
              className="py-3 px-16 bg-[#24249c] mt-20 text-white rounded-md"
            >
              Login
            </button>
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

export default SuccessModal;
