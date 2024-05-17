"use client";
import React, { useEffect, useState } from "react";

const ModalContainer = ({ children, closeBtn }) => {

  // Map through children and clone each element with additional props
  const childrenWithProps = React.Children.map(children, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element with additional props
      return React.cloneElement(child, { closeBtn });
    }
    return child; // Return the child as is if not a valid React element
  });
  return (
    <div>
      {childrenWithProps}
    </div>
  );
};

export default ModalContainer;
