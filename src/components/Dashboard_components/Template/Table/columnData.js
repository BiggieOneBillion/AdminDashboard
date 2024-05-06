import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";

// {
//   "id": 20,
//   "transistionDelay":"24",
//   "cliient": "Total Energies",
//   "size": "10 inches",
//   "templateName":"Total Energies 1"
// }

export const columnData = [
  {
    id: "id",
    header: "S/N",
    accessorKey: "id",
  },
  {
    id: "client",
    header: "Client",
    accessorKey: "client",
  },
  {
    id: "templateName",
    header: "Template Name",
    accessorKey: "templateName",
    // cell: ({ row }) => <DeviceDetailsModal data={row.original} key={v4()} />,
  },
  {
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  {
    id: "transistionDelay",
    header: "Transistion Delay",
    accessorKey: "transistionDelay",
    cell: ({ row }) => <span>{row.original.transistionDelay}hours</span>,
  },
];
