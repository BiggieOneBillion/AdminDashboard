"use client"
import React from "react";
import Info from "./AdminInfo/Info";

const MainSection = ({ children }) => {
  return (
    <section className="right-section flex-1  overflow-scroll flex flex-col bg-[#F5F5F5]">
      <Info />
      {children}
    </section>
  );
};

export default MainSection;
