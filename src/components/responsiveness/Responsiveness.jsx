"use client";
import React, { useState, useEffect } from "react";

const ResponsiveWarning = ({ children }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(!(window.innerWidth > 1024));
    };

    // Set the initial value
    handleResize();

    // Add event listener to track screen size changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreen ? (
    <div className="flex items-center justify-center h-screen">
      <p className=" font-semibold text-black text-xl uppercase text-center p-5 sm:p-10">
        This app is best viewed on a desktop with a screen width of 1024px or
        above.
      </p>
    </div>
  ) : (
    children
  );
};

export default ResponsiveWarning;
