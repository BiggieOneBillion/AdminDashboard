import Image from "next/image";
import React from "react";

const Card = ({ datum }) => {
  return (
    <div className="p-5 rounded-xl border h-fit w-full space-y-3">
      {/* image container */}
      <div className="image-container w-full h-[150px]">
        <Image
          src={"/images/photo2.jpg"}
          width={200}
          height={150}
          alt="services-images"
          className="h-full w-full object-cover"
        />
      </div>
      {/* description */}
      <div className="space-y-1">
        <h3 className="font-medium text-sm">Lorem Ispum</h3>
        <p className="font-light text-xs text-[#646464]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis,
          dolorum.
        </p>
      </div>
    </div>
  );
};

export default Card;
