import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoIosMore, IoMdClose } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import NewClientForm from "../Client_Component/NewClientForm";
import DeviceDetailsCard from "./DeviceDetailsCard";
import { userStore } from "@/store/user";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DeviceDetailsModal = ({ data, header, details }) => {
  // remmember to fetch the data necessay using tanstack query to display the device data
  const token_id = userStore((state) => state.token_id);
  const {
    data: deviceDetails,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: [`client_device_details_info-${data.id}`, data.id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api-prestigecalendar.olotusquare.co/api/v1/admin/clients/${data.clientId}/devices/${data.id}`,
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

  // if (isLoading) {
  //   return (
  //     <div className="fixed inset-0 w-screen h-screen bg-[rgba(0,0,0,0.1)] flex justify-center items-center">
  //       <div className="loader"></div>
  //     </div>
  //   );
  // }

  if (isError || deviceDetails === undefined) {
    console.log(deviceDetails);
    return (
      <div className="py-10 flex justify-center gap-3 items-center w-full">
        <p className="px-2 py-1 border text-black text-sm capitalize">
          Error while fetching data. Try again
        </p>
        <button
          onClick={() => refetch()}
          className="border rounded-sm font-medium text-black text-sm px-4 py-2 bg-transparent active:scale-95 transition-transform duration-200 ease-in-out"
        >
          ReLoad
        </button>
      </div>
    );
  }

  // deviceDetails && console.log(deviceDetails);

  // Map through children and clone each element with additional props
  const childrenWithProps = React.Children.map(details, (child) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // Clone the child element with additional props
      return React.cloneElement(child, { deviceDetails });
    }
    return child; // Return the child as is if not a valid React element
  });

  return (
    <Dialog.Root>
      <Dialog.Trigger className="block w-fit">
        <span>{header}</span>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[rgba(0,0,0,0.5)] data-[state=open]:animate-overlayShow fixed inset-0`}
        />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[500px]y  max-w-fit translate-x-[-50%] translate-y-[-50%]  bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          {/* {details} */}
          {childrenWithProps}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeviceDetailsModal;
