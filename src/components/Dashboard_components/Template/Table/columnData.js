import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";
import TemplateDevice from "../TemplateDetails";
import { MdOutlineMoreVert } from "react-icons/md";
import ActionMenu from "@/components/ActionMenu";

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
    cell: ({ row }) => (
      <DeviceDetailsModal
        data={row.original}
        header={row.original.client}
        key={v4()}
        details={<TemplateDevice />}
      />
    ),
  },
  {
    id: "templateName",
    header: "Template Name",
    accessorKey: "templateName",
    cell: ({ row }) => (
      <DeviceDetailsModal
        data={row.original}
        header={row.original.templateName}
        key={v4()}
        details={<TemplateDevice />}
      />
    ),
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
  {
    id: "id",
    header: "Actions",
    accessorKey: "id",
    cell: () => (
      <span>
        {/* <MdOutlineMoreVert size={20} /> */}
        <ActionMenu />
      </span>
    ),
  },
];
