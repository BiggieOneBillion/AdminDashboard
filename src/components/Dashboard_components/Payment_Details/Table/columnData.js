import { v4 } from "uuid";
import PaymentDetailsModal from "../PaymentDetailsModal";

// {
//   "id": "32f77289-5fc4-4d75-9274-9b529dc30cb2",
//   "clientId": "350484b5-b9d7-4384-8276-5bbb9c81cbd1",
//   "transactionId": "TX1234567890",
//   "date": "2024-05-17",
//   "deviceName": "Tab T01",
//   "deviceSize": "10 inches",
//   "deviceId": "DEV001",
//   "amount": 299.99,
//   "isComplete": true,
//   "deletedAt": null,
//   "createdAt": "2024-05-17T00:26:23.915Z",
//   "updatedAt": "2024-05-17T00:27:55.178Z"
// }

export const columnData = [
  {
    id: "serial",
    header: "S/N",
    accessorKey: "serial",
  },
  {
    id: "transactionId",
    header: "Transaction ID",
    accessorKey: "transactionId",
    cell: ({ row }) => (
      // <span>{row.original.transactionId}</span>
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
    id: "deviceSize",
    header: "Size",
    accessorKey: "deviceSize",
  },
  {
    id: "date",
    header: "Date",
    accessorKey: "date",
  },
  {
    id: "amount",
    header: "Amount",
    accessorKey: "amount",
  },
  {
    id: "isComplete",
    header: "Transistion Delay",
    accessorKey: "isComplete",
    cell: ({ row }) => (
      <span
        key={v4()}
        className={`px-2 py-1 rounded-xl text-sm inline-block ${
          row.original.isComplete
            ? "text-green-500 bg-green-200"
            : "text-red-500 bg-red-200"
        }`}
      >
        {row.original.isComplete ? "Complete" : "Incomplete"}
      </span>
    ),
  },
];
