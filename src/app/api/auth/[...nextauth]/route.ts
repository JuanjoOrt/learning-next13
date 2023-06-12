import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        user: { label: 'user', type: "text" },
        password: { label: 'password', type: "password" },
      },
      authorize(credentials) {
        return { id: "1", name: "Admin", email: "admin@admin.com" };
      },
    }),
  ],
  pages: {
    signIn: '/'
  }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
