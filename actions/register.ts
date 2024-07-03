"use server";
import * as z from "zod";
import bcryptjs from "bcryptjs";

import { db } from "@/lib/db";
import { registerSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid credentials",
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcryptjs.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return {
      error: "User already exists",
    };
  }

  await db.user.create({
    data: {
      name: name.toLowerCase(),
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send email verification

  return {
    success: "User registered successfully",
  };
};
