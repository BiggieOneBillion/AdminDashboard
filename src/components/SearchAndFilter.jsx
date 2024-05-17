import React from "react";
import { AiOutlineSearch } from "react-icons/ai";


const SearchAndFilter = ({filtering, setFiltering, dropdownMenu}) => {
  return (
    <div className="flex justify-end items-center gap-3 py-4">
      <div className="flex items-center border px-5 py-1 rounded-2xl">
        <input
          type="text"
          className="w-[200px] py-[2px]y caret-black text-black text-sm outline-none placeholder:font-light  placeholder:text-xs placeholder:text-subText border-gray-200"
          placeholder="Search here"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
        />
        <button className="border-noney bordery px-2 text-black border-gray-200 py-[6px] text-[17px]">
          <AiOutlineSearch />
        </button>
      </div>
      {/* <div className="border p-2 rounded-md mr-4">
       {dropdownMenu}
      </div> */}
    </div>
  );
};

export default SearchAndFilter;
