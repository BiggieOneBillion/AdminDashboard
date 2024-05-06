"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-[80px]  flex items-center justify-center gap-[10px] px-6 py-5.5 lg:py-6.5 ">
      <Link href={"/dashboard"} className="text-[40px]">
        <Image height="40" width="40" src="/images/logo.png" alt="logo image" />
      </Link>
    </header>
  );
};

export default Header;
