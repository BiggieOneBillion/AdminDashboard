"use client";
import React, { useEffect, useState } from "react";

const TableContainer = ({ children }) => {
  const [data, setData] = useState([]);

  // Map through children and clone each element with additional props
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element with additional props
      return React.cloneElement(child, { data });
    }
    return child; // Return the child as is if not a valid React element
  });

  //   DATA FETCHING USING USEEFFECT
  //   useEffect(() => {
  //     axios
  //       .get("/api/user")
  //       .then((res) => setData(res.data.result))
  //       .catch((error) => console.log(error));
  //   }, []);

  // data && console.log(data);
  return (
    <div>
      {/* TABLE */}
      {/* {data.length == 0 && (
        <h1 className="h-[500px] flex justify-center items-center text-2xl font-semibold text-black">
          Loading...
        </h1>
      )} */}
      {/* {data.length > 0 && ( */}
      {/* {children} */}
      {childrenWithProps}
      {/* )} */}
    </div>
  );
};

export default TableContainer;
