import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { redirect } from "next/dist/server/api-utils"

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
        type: "credentials",
        credentials: {
          username: { label: "Username", type: "text", },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          const user = { id: "1", name: "ardi", email: "ardi@gmail.com", password: "ardi123" }
    
          if (user) {
            return user
          } else {
            return null
          }
        }
    
      })
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }: any) {
      return url.startsWith(baseUrl) ? url : baseUrl
    }
  }
}

export const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }