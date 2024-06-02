import React from "react";
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import { v4 } from "uuid";

const EDMenu = () => {
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
  return (
    <menu className="bg-white px-2 w-[150px] border py-1 space-y-2 rounded-md mr-10 mt-5">
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
  );
};

export default EDMenu;
