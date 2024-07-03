import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(1, {
    message: "Please enter a password",
  }),
});

export const registerSchema = z.object({
  name: z.string().min(1, {
    message: "Please enter a name",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(6, {
    message: "Please enter a password and make sure it is at least 6 characters long",
  }),
});
