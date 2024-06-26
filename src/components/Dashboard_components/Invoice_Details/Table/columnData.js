import { v4 } from "uuid";
import PaymentDetailsModal from "../InvoiceDetailsModal";
import InvoiceDetailsModal from "../InvoiceDetailsModal";
import Image from "next/image";
import MyDropdownMenu from "../InvoiceDDM";

// {
//   "id": 20,
//   "invoiceID": "5100179956576557",
//   "client": "Total Energies",
//   "Amount": 10000,
//   "status": "Incomplete",
//   "purchaseDate": "01/09/2025",
//   "dueDate":"01/11/2025"
// }

// {
//   "id": "a6b5046b-d695-4a0f-8735-1be8678f84bf",
//   "clientId": "1f791535-3316-4b74-aea7-6b037ddde504",
//   "invoiceId": "INV055",
//   "notes": "Let us do my thing",
//   "issuedAt": "2024-06-21T00:00:00.000Z",
//   "dueAt": "2024-06-22T00:00:00.000Z",
//   "details": [
//       {
//           "size": "21",
//           "amount": 40000,
//           "quantity": 15,
//           "description": "device payment"
//       }
//   ],
//   "status": "incomplete",
//   "deletedAt": null,
//   "createdAt": "2024-06-20T12:14:08.837Z",
//   "updatedAt": "2024-06-20T12:14:08.837Z",
//   "client": {
//       "name": "Blessing Anyebe",
//       "mobile": "admin@mail.com",
//       "email": "blessinganyebe25@gmail.com",
//       "logoUrl": null,
//       "location": "Benue State"
//   },
//   "serial": 1
// }

function convertDateFormat(dateString) {
  // Split the input date string by '/'
  const [day, month, year] = dateString.split("/");
  // Return the date in ISO format YYYY-MM-DD
  return `${year}-${month}-${day}`;
}

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "invoiceId",
    header: "Invoice ID",
    accessorKey: "invoiceId",
    cell: ({ row }) => (
      <InvoiceDetailsModal
        data={row.original}
        header={row.original.invoiceId}
      />
    ),
  },
  {
    id: "clientId",
    header: "Client",
    accessorKey: "clientId",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-[30px] w-[30px] border rounded-full overflow-hidden">
          <Image
            alt="company logo"
            src={
              row.original.client.logoUrl === null
                ? "/images/no-image-2.png"
                : row.original.client.logoUrl
            }
            height={50}
            width={50}
            className="object-cover h-[30px] w-[30px]"
          />
        </div>
        <span key={v4()}>{row.original.client.name}</span>
      </div>
    ),
  },
  {
    id: "issuedAt",
    header: "Purchase Date",
    accessorKey: "issuedAt",
    cell: ({ row }) => (
      <span>
        {convertDateFormat(
          new Date(row.original.issuedAt).toLocaleDateString()
        )}
      </span>
    ),
  },
  {
    id: "dueAt",
    header: "Due Date",
    accessorKey: "dueAt",
    cell: ({ row }) => (
      <span>
        {convertDateFormat(new Date(row.original.dueAt).toLocaleDateString())}
      </span>
    ),
  },
  {
    id: "details",
    header: "Amount",
    accessorKey: "details",
    cell: ({ row }) => <span>{row.original.details[0].amount}</span>,
  },
  {
    id: "status",
    header: "Status",
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
  {
    id: "serial",
    header: "Actions",
    accessorKey: "serial",
    cell: ({ row }) => <MyDropdownMenu id={row.original.id} />,
  },
];
