import React from "react";
import { IoIosMore } from "react-icons/io";
import { AiOutlinePicture } from "react-icons/ai";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import MyDropdownMenu from "./TemplateDDM";

const Container = ({ children }) => (
  <div className="p-4 border w-[400px] rounded-lg flex flex-col gap-2 bg-whitey">
    {children}
  </div>
);

const TemplateCard = () => {
  return (
    <Container>
      {/* logo, company name, more icon */}
      <div className="flex items-center justify-start gap-3">
        {/* logo */}
        <div className="h-[50px] w-[50px] rounded-full border"></div>
        {/* company name */}
        <h2 className="text-sm font-semibold text-black">Total Energies</h2>
        {/* more icon */}
        <span className="ml-auto">
          <MyDropdownMenu />
        </span>
      </div>
      {/* DETAILS */}
      <ul className=" flex flex-wrap gap-3 items-center">
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <AiOutlinePicture />
            </span>
            <span className="font-light text-xs">Images</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">234</span>
        </li>
        {/* QUOTE */}
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <BiSolidQuoteAltLeft />
            </span>
            <span className="font-light text-xs">Quote</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">234</span>
        </li>
        {/* SIZE */}
        <li className="flex items-center gap-3 text-sm px-3 py-1 rounded-xl border">
          {/* icon */}
          <div className="flex items-center gap-1">
            <span>
              <AiOutlinePicture />
            </span>
            <span className="font-light text-xs">Images</span>
          </div>
          {/* amount */}
          <span className="text-xs font-medium">234</span>
        </li>
      </ul>
    </Container>
  );
};

export default TemplateCard;
