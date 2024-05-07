import { v4 } from "uuid";
import PaymentDetailsModal from "../PaymentDetailsModal";

export const columnData = [
  {
    id: "id",
    header: "S/N",
    accessorKey: "id",
  },
  {
    id: "transactionId",
    header: "Transaction ID",
    accessorKey: "transactionId",
    cell: ({ row }) => (
      <PaymentDetailsModal
        key={v4()}
        data={row.original}
        header={row.original.transactionId}
      />
    ),
  },
  {
    id: "deviceId",
    header: "Device ID",
    accessorKey: "deviceId",
  },
  {
    id: "deviceName",
    header: "Device Name",
    accessorKey: "deviceName",
  },
  {
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
  },
  {
    id: "Amount",
    header: "Amount",
    accessorKey: "Amount",
  },
  {
    id: "status",
    header: "Transistion Delay",
    accessorKey: "status",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.status === "Incomplete"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
];
