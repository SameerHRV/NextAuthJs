"use server";
import * as z from "zod";

import { loginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validaedSchema = loginSchema.safeParse(values);

  if (!validaedSchema.success) {
    return {
      error: "Invalid credentials",
    };
  }

  return {
    success: "Login successful",
  };
};
