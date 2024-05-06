import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";

// {
//   "id": 3,
//   "deviceId": "5575974990398075",
//   "purchaseDate": "06/01/2023",
//   "cliient": "Total Energies",
//   "status": "Active",
//   "size": "10 inches",
//   "deviceName": "Device X"
// },

export const columnData = [
  {
    id: "id",
    header: "S/N",
    accessorKey: "id",
  },
  {
    id: "deviceId",
    header: "Device ID",
    accessorKey: "deviceId",
    cell: ({ row }) => <DeviceDetailsModal data={row.original} key={v4()} />,
  },
  {
    id: "deviceName",
    header: "Device name",
    accessorKey: "deviceName",
  },
  {
    id: "cliient",
    header: "Client",
    accessorKey: "cliient",
  },
  {
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  {
    id: "purchaseDate",
    header: "Purchase Date",
    accessorKey: "purchaseDate",
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
  },
];
