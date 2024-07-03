"use server";
import * as z from "zod";

import { registerSchema } from "@/schemas";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validaedSchema = registerSchema.safeParse(values);

  if (!validaedSchema.success) {
    return {
      error: "Invalid credentials",
    };
  }

  return {
    success: "Register successful",
  };
};
