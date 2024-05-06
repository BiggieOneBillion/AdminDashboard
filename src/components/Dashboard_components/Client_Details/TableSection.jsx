"use client";
import React, { useEffect, useState } from "react";
import mData from "./Table/mData.json";
import { columnData } from "./Table/columnData";
import { CiFilter } from "react-icons/ci";
import { AiOutlineSearch } from "react-icons/ai";
import TableContainer from "./Table/TableContainer";
import MyDropdownMenu from "./DeviceFilterDropDownMenu";
import Table from "../Main_Dashboard/Main_Table/Tables/Table";
import SearchAndFilter from "./SearchAndFilter";
import Tabs from "./Tabs";
import TemplateCard from "./Templates/TemplateCard";
import About from "./About/About";
import Service from "./ProductAndServices/Service";
import News from "./News/News";

const TableSection = ({ index, setIndex }) => {
  const [filtering, setFiltering] = useState("");

  const filterState = {
    filtering,
    setFiltering,
  };

  return (
    <div className="space-y-10 bg-white px-6 py-5 rounded-2xl">
      <section className="table space-y-5 w-full">
        <div className="flex items-center justify-between border-b">
          {/* Tabs */}
          <Tabs index={index} setIndex={setIndex} />

          {/* Search And Filter */}
          {index === 0 && (
            <SearchAndFilter
              filtering={filtering}
              setFiltering={setFiltering}
            />
          )}
        </div>

        {index === 0 && (
          <TableContainer>
            <Table
              columnData={columnData}
              mData={mData}
              filterState={filterState}
            />
          </TableContainer>
        )}
        {index === 1 && <TemplateCard />}
        {index === 2 && <About />}
        {index === 3 && <Service />}
        {index === 4 && <News />}
      </section>
    </div>
  );
};

export default TableSection;
