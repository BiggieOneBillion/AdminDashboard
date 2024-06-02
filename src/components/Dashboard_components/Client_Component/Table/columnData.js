import Image from "next/image";
import Link from "next/link";
import { RiDeleteBin6Line } from "react-icons/ri";
import { v4 } from "uuid";

// {
//   "id": "888fe7dc-f762-479b-b301-83bc10f8a971",
//   "name": "Pagac Inc",
//   "location": "Doyleport",
//   "email": "Diego83@gmail.com",
//   "mobile": "936.330.5003 x940",
//   "about": "Tepidus cursim cur demo bibo suscipit comparo. Thesaurus summopere ulciscor vesica acies. Theca ulciscor tracto tener.\nThorax solum tamdiu molestias. Utrum degenero dedico casso spargo. Supra crastinus nesciunt certe spes amor desparatus tamdiu ulterius adeptio.",
//   "logoUrl": "https://loremflickr.com/640/480?lock=8361745978490880",
//   "status": true,
//   "createdAt": "2024-04-07T11:27:54.933Z",
//   "updatedAt": "2023-10-25T10:51:20.267Z",
//   "deletedAt": null,
//   "devicesCount": 10,
//   "devicesOwned": 10,
//   "activeDevices": 10,
//   "totalAmountPaid": 0
// },

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
