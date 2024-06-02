import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { v4 } from "uuid";
import { CiFilter } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineMoreVert } from "react-icons/md";

const ActionMenu = () => {

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
        <MdOutlineMoreVert size={20} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content>
        <menu className="bg-white px-2 w-[150px] border py-1 space-y-2 rounded-md ml-[140px] mt-5">
          {menuData.map((menu, i) => (
            <li
              key={v4()}
              className={`flex items-center gap-1  ${
                i == 1 && "bg-red-300 text-red-500"
              } px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out btn-animate`}
            >
              <span className="font-normal text-sm">{menu.Icon}</span>
              <span className="font-normal text-sm">{menu.name}</span>
            </li>
          ))}
        </menu>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default ActionMenu;

