import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { v4 } from "uuid";
import { CiFilter } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { RiPencilLine } from "react-icons/ri";
import { RiDeleteBinLine } from "react-icons/ri";

const MyDropdownMenu = ({children}) => {

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IoIosMore size={20} />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content alignOffset={100}>
        {children}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default MyDropdownMenu;
