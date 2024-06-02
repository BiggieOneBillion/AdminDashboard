import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";
import Link from "next/link";

// {
//   "id": 1,
//   "client": "Total Energies",
//   "deviceOwned": 10,
//   "date": "01/09/2024",
//   "paymentStatus": "Complete"
// },

// {
//   "id": "b0365fc4-ae2a-4926-8dcd-86794cef8ad2",
//   "clientId": "b73601cc-795d-45cb-9ea0-1c09f1012923",
//   "invoiceId": "INV002",
//   "notes": "Invoice must be paid on or before the dawn of due date",
//   "issuedAt": "2023-10-22T23:00:00.000Z",
//   "dueAt": "2023-12-21T23:00:00.000Z",
//   "details": [
//     {
//       "size": "11",
//       "amount": 20000,
//       "quantity": 6,
//       "description": "Subscription for 6 months"
//     }
//   ],
//   "status": "incomplete",
//   "deletedAt": null,
//   "createdAt": "2023-11-02T12:07:31.895Z",
//   "updatedAt": "2023-11-02T12:07:31.895Z",
//   "client": {
//     "name": "Nigeria National Peroleum Corporation",
//     "mobile": "+141223344532",
//     "email": "hello@nnpc.com",
//     "logoUrl": "https://s3",
//     "location": "Port Harcourt"
//   }
// }

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "clientId",
    header: "Client",
    accessorKey: "clientId",
    cell: ({ row }) => (
      <Link href={`/invoices/${row.original.id}`}>{row.original.clientId}</Link>
    ),
  },
  {
    id: "deviceOwned",
    header: "Device Owned",
    accessorKey: "deviceOwned",
    cell: ({ row }) => <span>{row.original.details.quantity}</span>,
  },
  {
    id: "issuedAt",
    header: "Date",
    accessorKey: "issuedAt",
    cell: ({ row }) => (
      <span>{new Date(row.original.issuedAt).toLocaleDateString()}</span>
    ),
  },
  {
    id: "serial",
    header: "Amount Paid",
    accessorKey: "serial",
    cell: ({ row }) => <span>{row.original.details.amount}</span>,
  },
  {
    id: "status",
    header: "Payment Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.status === "incomplete"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
];
