import Image from "next/image";
import React from "react";
import EditNewsModal from "./News/EditNews";
import DeleteNewsModal from "./News/DeleteNewsModal";

const Card = ({ datum }) => {

  return (
    <div className="p-5 rounded-xl border h-fit w-full space-y-3">
      {/* image container */}
      <div className="image-container w-full h-[150px]">
        <Image
          src={
            datum.coverImageUrl.endsWith(".png") ||
            datum.coverImageUrl.endsWith(".jpg") ||
            datum.coverImageUrl.endsWith(".jpeg")
              ? datum.coverImageUrl
              : "/images/no-image-2.png"
          }
          width={200}
          height={150}
          alt="services-images"
          className="h-full w-full object-cover"
        />
      </div>
      {/* description */}
      <div className="space-y-1">
        <div className="flex items-center justify-between">
          <h3 className="font-medium text-sm">{datum.title}</h3>
          {/* <MyDropdownMenu>
            <EDMenu />
          </MyDropdownMenu> */}
          <div className="flex items-center gap-3">
            <EditNewsModal info={datum}/>
            <DeleteNewsModal clientId={datum.clientId} newsId={datum.id} />
          </div>
        </div>
        <p className="font-light text-xs text-[#646464]">{datum.subtext}</p>
      </div>
    </div>
  );
};

export default Card;
