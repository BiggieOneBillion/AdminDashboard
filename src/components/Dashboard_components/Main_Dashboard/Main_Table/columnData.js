import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";



export const columnData = [
  {
    id: "id",
    header: "Client ID",
    accessorKey: "id",
    cell: ({ row }) => (
      <Link
        key={v4()}
        href={`/clients/${row.original.id}`}
        className=" uppercase"
      >
        {row.original.id.slice(0, 7)}
      </Link>
    ),
  },
  {
    id: "Client",
    header: "Client",
    accessorKey: "name",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
          <Image
            alt="company logo"
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
        <Link key={v4()} href={`/clients/${row.original.id}`}>
          {row.original.name}
        </Link>
      </div>
    ),
  },
  {
    id: "location",
    header: "Location",
    accessorKey: "location",
  },
  {
    id: "devicesOwned",
    header: "Device Owned",
    accessorKey: "devicesOwned",
  },
  {
    id: "activeDevices",
    header: "Active Devices",
    accessorKey: "activeDevices",
  },
  {
    id: "totalAmountPaid",
    header: "Amount paid",
    accessorKey: "totalAmountPaid",
    direction: "desc",
  },
];

// export const columnData = [
//   {
//     id: "Id",
//     header: "Client ID",
//     accessorKey: "_id",
//     accessorFn: (row) => `${row._id.toUpperCase()}`,
//   },
//   {
//     id: "Client",
//     header: "Client",
//     accessorKey: "client",
//   },
//   {
//     id: "Location",
//     header: "Location",
//     accessorKey: "Location",
//   },
//   {
//     id: "Device_Owner",
//     header: "Device Owned",
//     accessorKey: "deviceOwned",
//   },
//   {
//     id: "Active_Device",
//     header: "Active Devices",
//     accessorKey: "ActiveDevices",
//   },
//   {
//     id: "Amount paid",
//     header: "Amount paid",
//     accessorKey: "AmountPaid",
//     direction: "desc",
//   },
// ];
