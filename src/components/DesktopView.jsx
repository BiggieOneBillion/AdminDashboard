"use client"
import React, { useEffect, useState } from "react";

const DesktopView = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    // Function to update window width when resized
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  return (
    <div>
      {windowWidth <= 1280 && (
        <div className="h-screen w-screen flex justify-center items-center">
          <h1 className="font-semibold px-4 text-center text-2xl">
            Please You Can Only View Website In Desktop <br /> or Screen Size of 1280px
          </h1>
        </div>
      )}
      {windowWidth > 1280 && children}
    </div>
  );
};

export default DesktopView;
