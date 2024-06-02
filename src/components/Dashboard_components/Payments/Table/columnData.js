import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";
import Link from "next/link";
import Image from "next/image";

// {
//   "id": 1,
//   "client": "Total Energies",
//   "deviceOwned": 10,
//   "date": "01/09/2024",
//   "paymentStatus": "Complete"
// },

// {
//   "id": "81efb97c-00a8-4f65-a835-2c81d2841265",
//   "name": "Baker Huges",
//   "location": "Eleme Port Harcourt",
//   "email": "tgmail@gmail.com",
//   "mobile": "09081234567",
//   "about": null,
//   "logoUrl": null,
//   "status": true,
//   "createdAt": "2024-05-31T01:24:37.825Z",
//   "updatedAt": "2024-05-31T01:24:37.825Z",
//   "deletedAt": null,
//   "devicesOwned": 1,
//   "paymentStatus": "Complete"
// }

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "name",
    header: "Client",
    accessorKey: "name",
    cell: ({ row }) => (
      // <Link href={`/payments/${row.original.id}`}>{row.original.name}</Link>
      <div className="flex items-center gap-2">
        <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
          <Image
            alt="company-logo"
            src={
              row.original.logoUrl === null
                ? "/images/no-image-2.png"
                : row.original.logoUrl
            }
            height={50}
            width={50}
            className="object-cover h-[30px] w-[30px]"
          />
        </div>
        <Link key={v4()} href={`/payments/${row.original.id}`}>
          {row.original.name}
        </Link>
      </div>
    ),
  },
  {
    id: "devicesOwned",
    header: "Device Owned",
    accessorKey: "devicesOwned",
  },
  {
    id: "createdAt",
    header: "Date",
    accessorKey: "createdAt",
    cell: ({ row }) => (
      <span>{new Date(row.original.createdAt).toLocaleDateString()}</span>
    ),
  },
  {
    id: "paymentStatus",
    header: "Payment Status",
    accessorKey: "paymentStatus",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.paymentStatus !== "Complete"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {row.original.paymentStatus}
      </span>
    ),
  },
];
