import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { v4 } from "uuid";
import { CiFilter } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import Modal from "@/components/Modal";
import DeleteInvoiceModal from "./DeleteInvoiceModal";
import MarkAsCompletedModal from "./MarkAsReadModal";

const Trigger = () => (
  <div className="bordery text-sm  flex items-center gap-2 py-1 px-3 ">
    <RiPencilLine size={16} />
    <span className="font-light text-sm">Edit</span>
  </div>
);

const MyDropdownMenu = ({ id, data }) => {
  const menuData = [
    {
      name: "Edit",
      Icon: <RiPencilLine size={16} />,
    },
    {
      name: "Delete",
      Icon: <RiDeleteBinLine size={16} />,
    },
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  const handleDeleteModal = (index) => {
    if (index == 1) {
      setIsOpen(true);
    }
  };



  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IoIosMore size={20} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content alignOffset={-100}>
        <menu className="bg-white px-2 min-w-[150px] border py-1 space-y-2 rounded-md ml-20 mt-0">
          <li className="bg-red-50y text-black rounded-lg border">
             <MarkAsCompletedModal id={id} />
          </li>
          <li className="bg-red-50 text-red-900 rounded-lg border">
            <DeleteInvoiceModal id={id}/>
          </li>
        </menu>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MyDropdownMenu;
