import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";

export const columnData = [
  {
    id: "Id",
    header: "Client ID",
    accessorKey: "_id",
    accessorFn: (row) => `${row._id.toUpperCase()}`,
  },
  {
    id: "Client",
    header: "Client",
    accessorKey: "client",
  },
  {
    id: "Location",
    header: "Location",
    accessorKey: "Location",
  },
  {
    id: "Device_Owner",
    header: "Device Owned",
    accessorKey: "deviceOwned",
  },
  {
    id: "Active_Device",
    header: "Active Devices",
    accessorKey: "ActiveDevices",
  },
  {
    id: "Amount paid",
    header: "Amount paid",
    accessorKey: "AmountPaid",
    direction: "desc",
  },
];
