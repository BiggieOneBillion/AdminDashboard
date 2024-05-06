import React from "react";
import { v4 } from "uuid";

const Tabs = ({ index, setIndex }) => {

  const tabData = ["Devices", "Templates", "About", "Product/Service", "News"];

  return (
    <div className="flex items-center justify-start gap-2 mb-3">
      {tabData.map((tab, i) => (
        <button
        key={v4()}
          onClick={() => setIndex(i)}
          className={` ${
            i === index
              ? "bg-blue-800 text-white"
              : "text-blue-800 bg-transparent"
          }  inline-block active:scale-95 hover:text-white hover:bg-blue-800 transition duration-300 ease-in-out py-1 px-3 text-xs rounded-xl border border-blue-800`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
