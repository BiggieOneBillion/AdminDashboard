import Image from "next/image";
import React from "react";
import { RiDeleteBinLine, RiPencilLine } from "react-icons/ri";
import MyDropdownMenu from "./News/DropDownMenu";
import EDMenu from "./News/EDMenu";
import EditNewsModal from "./News/EditNews";
import DeleteNewsModal from "./News/DeleteNewsModal";
import { useParams } from "next/navigation";
import usePostData from "@/hooks/usePostData";

// {
//   "id": "5cbdf558-ecfe-438b-9bd0-1e428fe51e90",
//   "clientId": "888fe7dc-f762-479b-b301-83bc10f8a971",
//   "coverImageUrl": "https://loremflickr.com/640/480?lock=2447108848222208",
//   "title": "Grand opening",
//   "subtext": "Total Energies is a multi-energy company that produces and markets fuels, natural gas and electricity. Our 100,000 employees are committed to better energy that is more affordable, more reliable, cleaner and accessible to as many people as possible. Active in more than 130 countries, our ambition is to become the responsible energy major. Total Energies is a multi-energy company that produces and markets fuels, natural gas and electricity. Our 100,000 employees are committed to better energy that is more affordable, more reliable, cleaner and accessible to as many people as possible. Active in more than 130 countries, our ambition is to become the responsible energy major. Total Energies is a multi-energy company that produces and markets fuels, natural gas and electricity. Our 100,000 employees are committed to better energy that is more affordable, more reliable, cleaner and accessible to as many people as possible. Active in more than 130 countries, our ambition is to become the responsible energy major.",
//   "createdAt": "2024-05-15T09:34:00.078Z",
//   "updatedAt": "2024-05-15T09:52:54.049Z",
//   "deletedAt": null
// }

const Card = ({ datum }) => {
  const params = useParams();

  // const handleDelete = () => {
  //   const {mutations} = usePostData({
  //     url:`https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${datum.clientId}/news/${datum.id}`
  //   });
  //   return mutations
  // }

  //   [
  //     {
  //         "id": "cb916a18-3dbf-4aad-bce9-67fc1f3ba0a7",
  //         "clientId": "5c04e022-dae4-4852-ae71-61a8e2f0e046",
  //         "coverImageUrl": "jnasoiudjknfaskdjnfaskbjdnxfaskdbj",
  //         "title": "jo ookk",
  //         "subtext": "sdfsad sdf szdf arsdf a d",
  //         "createdAt": "2024-06-03T14:45:14.620Z",
  //         "updatedAt": "2024-06-03T14:45:14.620Z",
  //         "deletedAt": null
  //     }
  // ]

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
