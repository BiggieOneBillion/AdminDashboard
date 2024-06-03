"use client";
import React, { useEffect, useState } from "react";
import mData from "./Table/mData.json";
import { columnData } from "./Table/columnData";
import TableContainer from "./Table/TableContainer";
import SearchAndFilter from "@/components/SearchAndFilter";
import Table from "../Main_Dashboard/Main_Table/Tables/Table";
import MyDropdownMenu from "./Table/DropDownMenu";


const TableSection = () => {
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  return (
    <div className="space-y-10 bg-white px-6 py-5 rounded-2xl">
      <section className="table space-y-5 w-full">
        <div className="flex items-center justify-end border-b">
          {/* Search And Filter */}

          <SearchAndFilter filtering={filtering} setFiltering={setFiltering} dropdownMenu={<MyDropdownMenu />}/>
        </div>

        <TableContainer>
          <Table
            columnData={columnData}
            // mData={mData}
            filterState={filterState}
          />
        </TableContainer>
      </section>
    </div>
  );
};

export default TableSection;
