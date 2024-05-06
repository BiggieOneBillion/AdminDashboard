"use client";

import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Sidebar from "./SideBar";

const SideMenu = () => {
  return (
    <section className="left-section  flex flex-col px-2 ">
      <Sidebar />
    </section>
  );
};

export default SideMenu;
