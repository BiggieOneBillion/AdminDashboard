import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";
import DeviceDetailsModal from "../DeviceDetailsModal";

export const columnData = [
  {
    id: "Id",
    header: "S/N",
    accessorKey: "_id",
    accessorFn: (row) => `${row._id.toUpperCase()}`,
  },
  {
    id: "Client",
    header: "Device ID",
    accessorKey: "client",
    cell: ({ row }) => <DeviceDetailsModal data={row.original} key={v4()} />,
  },
  {
    id: "Location",
    header: "Device name",
    accessorKey: "Location",
  },
  {
    id: "Device_Owner",
    header: "Size",
    accessorKey: "deviceOwned",
  },
  {
    id: "Active_Device",
    header: "Amount Paid (N)",
    accessorKey: "ActiveDevices",
  },
  {
    id: "Amount paid",
    header: "Status",
    accessorKey: "AmountPaid",
    direction: "desc",
  },
];
