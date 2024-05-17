"use client";

import Link from "next/link";
import React from "react";
import { v4 } from "uuid";
import { usePathname } from "next/navigation";
import { menuItems } from "./meunData";

const Navigation = () => {
  const pathName = usePathname();
  return (
    <div className="flex flex-col overflow-y-auto duration-300 ease-linear">
      <nav className=" py-4  lg:px-6">
        <div>
          <ul className="mb-6 flex flex-col gap-3">
            {menuItems.map((menuItem) => {
              return (
                <Link href={menuItem.path} key={menuItem.id}>
                  <label
                    className={`group relative cursor-pointer flex text-base items-center gap-2.5  py-2 px-4 font-normal  duration-300 ease-in-out hover:bg-[#DFDFFF] hover:text-[#24249C]  rounded-md
               ${
                 pathName.includes(menuItem.path)
                   ? "bg-[#DFDFFF] text-[#24249C]"
                   : "bg-white text-[#5C5C5C]"
               }
               `}
                  >
                    {menuItem.icon}
                    {menuItem.label}
                  </label>
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
