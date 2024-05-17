import { z } from "zod";

export const paymentSchema = z.object({
  transactionId: z
    .string()
    .min(10, { message: "Cannot be less than 10 digits" }),
  clientId: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  name: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  size: z.enum(["10", "21"], { message: "must be 10 or 20" }),
  date: z.string().date(),
  deviceId: z.string().min(10, { message: "Field cannot be empty" }),
  deviceName: z.string().min(1, { message: "Field cannot be empty" }),
  amountPaid: z
    .string()
    .transform((value) => parseInt(value, 10))
    .refine((value) => !isNaN(value) && value >= 100000 && value <= 999999, {
      message: "must be a six-digit number.",
    }),
  paymentStatus: z.enum(["complete", "incomplete"]),
});
