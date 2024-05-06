import React from "react";
import EditServiceModal from "./EditService";
import { v4 } from "uuid";
import Card from "../Card";

const Service = () => {
  const count = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className="space-y-5">
      {/* title and edit icon */}
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg text-black">Service</h1>
        <EditServiceModal />
      </div>
      {/* description */}
      <p className="service-description font-normal text-sm text-[#646464] leading-[1.8]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque adipisci
        deleniti repellendus voluptate hic, magni blanditiis in eum consectetur
        eaque distinctio commodi, inventore laudantium veniam facere neque modi
        nobis minus saepe quaerat. Nobis error maiores voluptas quo iusto
        temporibus repudiandae!.
      </p>
      {/* cards */}
      <div className="grid grid-cols-2 gap-10">
        {count.map((el) => (
          <Card datum={el} key={v4()} />
        ))}
      </div>
    </div>
  );
};

export default Service;
