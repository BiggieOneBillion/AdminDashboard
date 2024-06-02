import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";
import DeviceDetailsModal from "../DeviceDetailsModal";
import DeviceDetailsCard from "../DeviceDetailsCard";

// {
//   "id": 1,
//   "deviceId": "5100177986336968",
//   "deviceName": "Device Name",
//   "size": 10,
//   "AmountPaid": 200000,
//   "status": "Active"
// },

// {
//   "id": "491e17be-ff72-46e6-9fa8-17233be18701",
//   "imei": "32-683791-244764-8",
//   "clientId": "888fe7dc-f762-479b-b301-83bc10f8a971",
//   "deviceId": null,
//   "size": "10",
//   "purchaseDate": "2024-05-15T06:59:00.690Z",
//   "status": "active",
//   "token": null,
//   "preferences": {
//       "dateFormat": "DD/MM/YY",
//       "timeFormat": "12 hours",
//       "startOfWeek": "Sunday",
//       "soundPreference": "Ring with vibration",
//       "notificationPreference": "Status bar only"
//   },
//   "deletedAt": null,
//   "createdAt": "2024-05-15T06:59:00.690Z",
//   "updatedAt": "2024-05-15T06:59:00.690Z"
// }

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "deviceId",
    header: "Device ID",
    accessorKey: "deviceId",
    cell: ({ row }) => <DeviceDetailsModal data={row.original} header={row.original.deviceId} key={v4()} details={<DeviceDetailsCard />} />,
  },
  {
    id: "imei",
    header: "IMEI ID",
    accessorKey: "imei",
    cell: ({ row }) => <DeviceDetailsModal data={row.original} header={row.original.imei} key={v4()} details={<DeviceDetailsCard />} />,

    // cell: ({ row }) => <DeviceDetailsModal data={row.original} header={row.original.imei} key={v4()} details={<DeviceDetailsCard />} />,
  },
  // {
  //   id: "deviceName",
  //   header: "Device name",
  //   accessorKey: "deviceName",
  // },
  {
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  // {
  //   id: "AmountPaid",
  //   header: "Amount Paid (N)",
  //   accessorKey: "AmountPaid",
  // },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => <span className={`${row.original.status === 'active' ? 'bg-green-200 text-green-500' : 'bg-red-300 text-red-500'} inline-block py-1 px-3 rounded-xl`}>{row.original.status}</span>,
  },
];
