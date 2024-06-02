import { z } from "zod";

export const paymentSchema = z.object({
  transactionId: z
    .string()
    .min(10, { message: "Cannot be less than 10 digits" }),
  clientId: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  // name: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  deviceSize: z.enum(["10 inches", "21 inches"], { message: "must be 10 or 20" }),
  date: z.string().date(),
  deviceId: z.string().min(10, { message: "Field cannot be empty" }),
  deviceName: z.string().min(1, { message: "Field cannot be empty" }),
  amountPaid: z
    .string()
    .transform((value) => parseInt(value, 10))
    .refine((value) => !isNaN(value) && value >= 10000 && value <= 999999, {
      message: "must be a six-digit number.",
    }),
  paymentStatus: z.enum(["complete", "incomplete"]),
  // deviceSize: z.enum(["complete", "incomplete"]),
});

// "clientId": "43a5ba3f-f290-4b4f-a4b4-4ee291a4c8f4",
// "transactionId": "TX124ldk890",
// "date": "2024-05-17",
// "deviceName": "Tab T032",
// "deviceSize": "10 inches",
// "deviceId": "DEV099",
// "amount": 15000,
// "isComplete": true
