import React from "react";
import EditServiceModal from "./EditService";
import { v4 } from "uuid";
import { useParams } from "next/navigation";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./Card";

const Service = () => {
  const params = useParams();

  const token_id = userStore((state) => state.token_id);

  // https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/:clientId/services

  const {
    data: serviceData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["service_data_info", params.id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${params.id}/services`,
        {
          headers: {
            Authorization: `Bearer ${token_id}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    },
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return (
      <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-10 flex justify-center items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
      </div>
    );
  }

  //   {
  //     "status": 200,
  //     "title": "Products and service",
  //     "message": "Successfully fetched client's product and services",
  //     "entity": {
  //         "id": "855e1768-8a21-411e-9c76-8150c7ecad2e",
  //         "description": null,
  //         "images": null,
  //         "client": {
  //             "id": "5f7d058f-83a3-40ed-bbce-9e4ab525841d",
  //             "name": "bolt ng",
  //             "location": "lagos",
  //             "email": "bolt@gmail.com",
  //             "mobile": "09087650000",
  //             "about": "Precios is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  //             "logoUrl": null,
  //             "status": true
  //         }
  //     }
  //   }

  console.log(serviceData);
  console.log(serviceData.entity.description);
  return (
    <div className="space-y-5">
      {/* title and edit icon */}
      <div className="flex items-center justify-between">
        <h1 className="font-medium text-lg text-black">Service</h1>
        <EditServiceModal data={serviceData.entity} />
      </div>
      {/* description */}
      {serviceData.entity.description && (
        <p className="service-description font-normal text-sm text-[#646464] leading-[1.8]">
          {serviceData.entity.description}
        </p>
      )}
      {/* cards */}
      {serviceData.entity.images !== null &&
      serviceData.entity.images.length > 0 ? (
        <div className="grid grid-cols-2 gap-10">
          {serviceData.entity.images.map((el) => (
            <Card datum={el} key={v4()} />
          ))}
        </div>
      ) : (
        <p className="text-3xl font-extrabold text-[rgba(0,0,0,0.1)] text-center">
          No Service/Product Avaliable
        </p>
      )}
    </div>
  );
};

export default Service;
