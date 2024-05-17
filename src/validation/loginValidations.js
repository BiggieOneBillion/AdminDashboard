import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Field cannot be empty" }),
  password: z.string().min(1, { message: "Field cannot be empty" }),
});

export const recoverEmailSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Field cannot be empty" }),
});

export const recoverCodeSchema = z.object({
  code: z.string().min(4, { message: "Not Valid, must be 6 characters long" }),
});

export const newPasswordSchema = z
  .object({
    newPassword: z.string().min(6, { message: "Field cannot be empty" }),
    confirmPassword: z.string().min(6),
  })
  .refine((data) => data.confirmPassword === data.newPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
