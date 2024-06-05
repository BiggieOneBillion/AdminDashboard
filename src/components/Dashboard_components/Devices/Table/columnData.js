import { v4 } from "uuid";
import DeviceDetailsModal from "../../Client_Details/DeviceDetailsModal";
import DeviceDetailsCard from "../../Client_Details/DeviceDetailsCard";
import Image from "next/image";
import Link from "next/link";
import EditDeviceModal from "../EditDeviceModal";

// {
//   "id": "b01c906b-73dc-4254-82cb-4c932b039810",
//   "imei": "2943752347874307284",
//   "clientId": "43a5ba3f-f290-4b4f-a4b4-4ee291a4c8f4",
//   "deviceId": "DOO2232ds",
//   "size": "21",
//   "purchaseDate": "2023-07-01T00:00:00.000Z",
//   "status": "active",
//   "token": null,
//   "preferences": {
//     "dateFormat": "DD/MM/YY",
//     "timeFormat": "12 hours",
//     "startOfWeek": "Sunday",
//     "soundPreference": "Ring with vibration",
//     "notificationPreference": "Status bar only"
//   },
//   "deletedAt": null,
//   "createdAt": "2024-05-29T08:15:51.821Z",
//   "updatedAt": "2024-05-29T08:15:51.821Z",
//   "client": {
//     "id": "43a5ba3f-f290-4b4f-a4b4-4ee291a4c8f4",
//     "name": "Stark, Heathcote and Waters",
//     "location": "Potomac",
//     "email": "Katrina_Hammes7@yahoo.com",
//     "mobile": "388-634-3593 x126",
//     "about": "Antea umerus vulpes angulus suppono benigne necessitatibus deprecator carbo. Vomer vorago terreo vito debitis adeptio aliqua velut crebro. Temporibus campana crepusculum depulso claustrum soluta.\nAccommodo vir coruscus. Nostrum defluo astrum culpo utor. Antea amaritudo ciminatio vae vulgus sponte adamo corporis.",
//     "logoUrl": "https://prestige-calendar-dev.s3.us-east-1.amazonaws.com/logo/d9f8521d-63b5-4b5c-8e56-0054a81162a2.jpeg",
//     "status": true,
//     "createdAt": "2024-04-16T16:11:43.371Z",
//     "updatedAt": "2024-05-26T15:23:38.551Z",
//     "deletedAt": null
//   }
// },

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "deviceId",
    header: "Device ID",
    accessorKey: "deviceId",
    cell: ({ row }) =>
      row.original.deviceId && (
        <DeviceDetailsModal
          data={row.original}
          header={row.original.deviceId}
          key={v4()}
          details={<DeviceDetailsCard />}
        />
      ),
  },
  // {
  //   id: "deviceName",
  //   header: "Device name",
  //   accessorKey: "deviceName",
  // },
  {
    id: "clientId",
    header: "Client ID",
    accessorKey: "clientId",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <div className="h-[30px] w-[30px] rounded-full overflow-hidden">
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
    id: "size",
    header: "Size",
    accessorKey: "size",
  },
  {
    id: "purchaseDate",
    header: "Purchase Date",
    accessorKey: "purchaseDate",
    cell: ({ row }) => (
      <span>{new Date(row.original.purchaseDate).toLocaleDateString()}</span>
    ),
  },
  {
    id: "status",
    header: "Status",
    accessorKey: "status",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.status !== "active"
            ? "text-red-500 bg-red-200"
            : "text-green-500 bg-green-200"
        }`}
      >
        {row.original.status}
      </span>
    ),
  },
  {
    id:'serial',
    header:'Actions',
    accessorKey:'serial',
    cell : ({row}) => <EditDeviceModal key={v4()} data={row.original} />
  }
];
