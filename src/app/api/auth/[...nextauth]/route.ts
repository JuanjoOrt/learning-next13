import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 10, // 24 hours
  },
  secret: 'tokenSecret',
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      async authorize(credentials) {
        const data = await fetch(
          `https://x8ki-letl-twmt.n7.xano.io/api:tPom_P5B/auth/login?email=test2@gmail.com&password=ABCDE123@`,
          {
            method: 'POST',
            headers: { "Content-Type": "application/json" }
          })
        const dataParsed = await data.json()
        return { id: "1", name: dataParsed.user.email, token: dataParsed.authToken, rol: dataParsed.user.rol }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
        token.role = user.rol
      }
      return token;
    },
  }
};

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
