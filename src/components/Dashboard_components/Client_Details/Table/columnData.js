import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";
import DeviceDetailsModal from "../DeviceDetailsModal";

// {
//   "id": 1,
//   "deviceId": "5100177986336968",
//   "deviceName": "Device Name",
//   "size": 10,
//   "AmountPaid": 200000,
//   "status": "Active"
// },

export const columnData = [
  {
    id: "Id",
    header: "S/N",
    accessorKey: "id",
  },
  {
    id: "deviceId",
    header: "Device ID",
    accessorKey: "deviceId",
    cell: ({ row }) => <DeviceDetailsModal data={row.original} header={row.original.deviceId} key={v4()} />,
  },
  {
    id: "deviceName",
    header: "Device name",
    accessorKey: "deviceName",
  },
  {
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  {
    id: "AmountPaid",
    header: "Amount Paid (N)",
    accessorKey: "AmountPaid",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <span className={`${row.original.status === 'Active' ? 'bg-green-200 text-green-500' : 'bg-red-300 text-red-500'} inline-block py-1 px-3 rounded-xl`}>{row.original.status}</span>,
  },
];
