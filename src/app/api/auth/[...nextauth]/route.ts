import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      id: 'credentials',
      type: 'credentials',
      credentials: {
        user: { label: 'user', type: "text" },
        password: { label: 'password', type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials.")
        }
        return { id: "1", name: "Admin", email: "admin@admin.com" };
      },
    }),
  ],
/*  callbacks: {
    jwt: () => {
      return { id: "1", name: "Admin", email: "admin@admin.com" }
    },
    session: ({ session }) => {
      return session
    }
  },*/
  pages: {
    signIn: '/',
  },
};

export default NextAuth(authOptions)
