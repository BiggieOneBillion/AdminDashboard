import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoMdClose } from "react-icons/io";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import ModalContainer from "./ModalContainer";

const CloseBtn = () => (
  <Dialog.Close className="col-span-2">
    <span className="py-3 text-center text-sm w-full text-gray-400 bg-white border flex justify-center items-center gap-2 rounded-lg btn-animate">
      <IoMdClose size={20} />
      <span>Cancel</span>
    </span>
  </Dialog.Close>
);

const Modal = ({
  trigger,
  content,
  title,
  width = "w-[800px]",
  modalBg = "bg-white",
  replace = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const CloseBtn = () => (
    <Dialog.Close onClick={handleClose} className="col-span-2">
      <span className="py-3 text-center text-sm w-full text-gray-400 bg-white border flex justify-center items-center gap-2 rounded-lg btn-animate">
        <IoMdClose size={20} />
        <span>Cancel</span>
      </span>
    </Dialog.Close>
  );

  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Trigger onClick={handleOpen} className="block w-fit">
        {trigger}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[80hv] overflow-y-scroll max-w-fit translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#D8D8DB]y ${modalBg} p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          {replace ? (
            <div
              className={`${width} h-fit pb-4 px-5 space-y-10 max-h-[95vh] overflow-y-scroll`}
            >
              {/* close btn, title, question  */}
              <div className="space-y-5">
                <div className="flex justify-between items-center py-4">
                  {/* back-button icon and notification text */}
                  <div className="flex items-center gap-3">
                    {/* on click of this button we close this modal */}
                    <Dialog.Close className="p-0 m-0">
                      <MdOutlineKeyboardBackspace size={20} />
                    </Dialog.Close>
                    <h3 className="text-base font-medium">{title}</h3>
                  </div>
                  {/* more icon */}
                  <Dialog.Close onClick={handleClose} className="p-0 m-0">
                    <IoMdClose size={20} />
                  </Dialog.Close>
                </div>
                {/* New Client Form */}
                <ModalContainer closeBtn={<CloseBtn />} closeFn={handleClose}>
                  {content}
                </ModalContainer>
              </div>
            </div>
          ) : (
            <ModalContainer
              closeBtn={<CloseBtn />}
              closeFn={handleClose}
            >
              {content}
            </ModalContainer>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Modal;
