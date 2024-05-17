import { z } from "zod";

export const newClientSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Field cannot be empty" }),
  name: z.string().min(1, { message: "Field cannot be empty" }),
  location: z.string().min(1, { message: "Field cannot be empty" }),
  mobile: z
    .string()
    .min(11, { message: "Cannot be empty and must be 11 digits" }),
  password: z.string().min(6, { message: "Cannot be less than 6 characters" }),
  logoUrl: z.any(),
  // .instanceof(File)
  // .refine((file) => ["image/jpeg", "image/png"].includes(file.files[0].type), {
  //   message: "Only JPEG or PNG files are accepted",
  // })
  // .refine((file) => file.files[0].size <= 5 * 1024 * 1024, {
  //   // 5MB
  //   message: "File size must be less than 5MB",
  // }),
});

export const newTemplateSchema = z.object({
  templateName: z.string().min(1, { message: "Field cannot be empty" }),
  imeiNumber: z.string().min(10, { message: "Field cannot be empty" }),
  purchaseDate: z.string().date(),
  size: z.enum(["10inches", "21inches"]),
});

export const newDeviceSchema = z.object({
  deviceId: z.string().min(1, { message: "Field cannot be empty" }),
  imeiNumber: z.string().min(10, { message: "Field cannot be empty" }),
  purchaseDate: z.string().date(),
  screenSize: z.enum(["21inches", "10inches"]),
});

export const editAboutValidation = z.object({
  title: z.string().min(1, { message: "Field cannot be empty" }),
  description: z.string().min(100, {
    message: "Field cannot be empty and must be more than 100 words",
  }),
});