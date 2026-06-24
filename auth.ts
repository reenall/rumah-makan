import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import bcrypt from 'bcryptjs'

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label: "Password", type: "password"}
      },
      async authorize(credentials){
        if(!credentials?.email || !credentials?.password) return null

        const user = await prisma.user.findUnique({
          where: {email: credentials.email as string}
        })
        if(!user || !user.password) return null

        // const isValidPassword = await bcrypt.compare(credentials.password as string, user.password as string)
        const isValidPassword = (credentials.password as string === user.password as string)
        if(!isValidPassword) return null

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role
        }
      }
    }), 
    Google
  ],
  session: {strategy: "jwt"},
  callbacks: {
    async jwt({token, account, user}){
      if(user){
        token.id = user.id as string
        token.role = user.role
      }
      return token
    },
    async session({ session, token }){
      if(token?.id) session.user.id = token.id
      if(token?.role) session.user.role = token.role
      return session
    }
  },
  pages: {
    signIn: "/auth/login",
  }
})