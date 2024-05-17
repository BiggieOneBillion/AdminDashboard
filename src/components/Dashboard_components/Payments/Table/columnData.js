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
    cell: ({row}) => (
      <Link href={'/payments/1234567890'}>{row.original.client}</Link>
    )
  },
  {
    id: "deviceOwned",
    header: "Device Owned",
    accessorKey: "deviceOwned",
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
  },
  {
    id: "paymentStatus",
    header: "Payment Status",
    accessorKey: "paymentStatus",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.paymentStatus === "Incomplete"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {row.original.paymentStatus}
      </span>
    ),
  },
];
