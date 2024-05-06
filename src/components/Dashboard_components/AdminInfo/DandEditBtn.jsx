import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosMore } from "react-icons/io";
import { BiCheckDouble } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { v4 } from "uuid";
import DeleteModal from "./DeleteModal";

const MyDropdownMenu = () => {
  const menuData = [
    {
      icons: <BiCheckDouble size={20} />,
      text: "Mark as read",
    },
    {
      icons: <IoMdClose size={20} />,
      text: "Clear all",
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
      <DropdownMenu.Content alignOffset={100}>
        <menu className="bg-white px-2 border py-1 space-y-2 rounded-md mr-10">
          <li
            className={`flex items-center gap-1 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out btn-animate`}
          >
            <span>
              <BiCheckDouble size={20} />
            </span>
            <span className="font-normal text-sm">Mark as read</span>
          </li>
          <DeleteModal />
        </menu>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MyDropdownMenu;

// {menuData.map((datum, i) => (
//     <li
//       key={v4()}
//       onClick={()=> handleDeleteModal(i)}
//       className={`flex items-center gap-1 px-4 py-2 rounded-md cursor-pointer transition-colors duration-200 ease-in-out ${
//         i === 1 && "text-red-500 bg-red-200"
//       }`}
//     >
//       <span>{datum.icons}</span>
//       <span className="font-normal text-sm">{datum.text}</span>
//     </li>
//   ))}
// </menu>
