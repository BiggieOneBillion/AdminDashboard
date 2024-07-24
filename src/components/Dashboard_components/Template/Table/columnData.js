import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";
import TemplateDevice from "../TemplateDetails";
import { MdOutlineMoreVert } from "react-icons/md";
import ActionMenu from "@/components/ActionMenu";
import TemplateModal from "../TemplateModal";


export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "client",
    header: "Client",
    accessorKey: "client",
    cell: ({ row }) => (
      <TemplateModal
        data={row.original}
        header={row.original.clientId}
        key={v4()}
        details={<TemplateDevice />}
      />
    ),
  },
  {
    id: "name",
    header: "Template Name",
    accessorKey: "name",
  },
  {
    id: "fileSize",
    header: "Size",
    accessorKey: "fileSize",
  },
  {
    id: "delay",
    header: "Transistion Delay",
    accessorKey: "delay",
    cell: ({ row }) => <span>{row.original.delay}</span>,
  },
  // {
  //   id: "id",
  //   header: "Actions",
  //   accessorKey: "id",
  //   cell: () => (
  //     <span>
  //       {/* <MdOutlineMoreVert size={20} /> */}
  //       <ActionMenu />
  //     </span>
  //   ),
  // },
];


