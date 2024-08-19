import { z } from "zod";

export const paymentSchema = z.object({
  transactionId: z
    .string()
    .min(10, { message: "Cannot be less than 10 digits" }),
  clientId: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  // name: z.string().min(10, { message: "Cannot be less than 10 digits" }),
  deviceSize: z.enum(["10", "21"], {
    message: "must be 10 or 21",
  }),
  date: z.string().date(),
  deviceId: z.string().min(1, { message: "must be 10 characters" }),
  deviceName: z.string().min(1, { message: "Field cannot be empty" }),
  amount: z
    .string()
    .transform((value) => parseInt(value, 10))
    .refine((value) => !isNaN(value) && value >= 10000 && value <= 999999, {
      message: "must be a six-digit number.",
    }),
  isComplete: z.enum(["incomplete", "complete"]),
  // deviceSize: z.enum(["complete", "incomplete"]),
});

