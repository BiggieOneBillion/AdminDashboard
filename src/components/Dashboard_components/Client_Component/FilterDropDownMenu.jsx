import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoIosMore } from "react-icons/io";
import { BiCheckDouble } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { v4 } from "uuid";
import { CiFilter } from "react-icons/ci";

const MyDropdownMenu = () => {
  const menuData = ["All", "Device Owned", "Active Device"];

  const [isOpen, setIsOpen] = React.useState(false);

  const handleDeleteModal = (index) => {
    if (index == 1) {
      setIsOpen(true);
    }
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <CiFilter size={20} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content alignOffset={100}>
        <menu className="bg-white px-2 border py-1 space-y-2 rounded-md mr-10 mt-5">
          {menuData.map((menu) => (
            <li
              key={v4()}
              className={`flex items-center gap-1 hover:bg-slate-200 px-4 py-2 rounded-md cursor-pointer transition-colors duration-300 ease-in-out btn-animate`}
            >
              <span className="font-normal text-sm">{menu}</span>
            </li>
          ))}
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
