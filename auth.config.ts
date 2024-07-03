import bcriptjs from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";
import { loginSchema } from "./schemas";

export default {
  providers: [
    CredentialsProvider({
      async authorize(credentials: Partial<Record<string, unknown>>, req: Request) {
        const validatedFields = loginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          const isPasswordValid = await bcriptjs.compare(password, user.password);
          if (isPasswordValid) {
            return user;
          }

          return null;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
