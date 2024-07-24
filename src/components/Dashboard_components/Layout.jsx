"use client";
import React from "react";
import SideMenu from "./SideMenu_component/SideMenu";
import MainSection from "./MainSection";
import { usePathname } from "next/navigation";
import Login from "../Auth/login/Login";

const Layout = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/") {
    return <Login />;
  }
  return (
    <div className="h-screen w-screen grid grid-cols-[250px_1fr] bg-white">
      <SideMenu />
      <MainSection>
        <main className="flex-1 p-10 overflow-y-scroll">
          {children}
        </main>
      </MainSection>
    </div>
  );
};

export default Layout;
