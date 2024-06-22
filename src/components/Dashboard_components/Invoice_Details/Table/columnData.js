import { v4 } from "uuid";
import PaymentDetailsModal from "../InvoiceDetailsModal";

// {
//   "id": 20,
//   "invoiceID": "5100179956576557",
//   "client": "Total Energies",
//   "Amount": 10000,
//   "status": "Incomplete",
//   "purchaseDate": "01/09/2025",
//   "dueDate":"01/11/2025"
// }

export const columnData = [
  {
    id: "id",
    header: "S/N",
    accessorKey: "id",
  },
  {
    id: "invoiceID",
    header: "Invoice ID",
    accessorKey: "invoiceID",
    // cell: ({ row }) => (
    //   <PaymentDetailsModal
    //     key={v4()}
    //     data={row.original}
    //     header={row.original.transactionId}
    //   />
    // ),
  },
  {
    id: "client",
    header: "Client ID",
    accessorKey: "client",
  },
  {
    id: "purchaseDate",
    header: "Purchase Date",
    accessorKey: "purchaseDate",
  },
  {
    id: "dueDate",
    header: "Due Date",
    accessorKey: "dueDate",
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
