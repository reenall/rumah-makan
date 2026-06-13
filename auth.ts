import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"

 
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Google],
  session: {strategy: "jwt"},
  callbacks: {
    async jwt({token, account, user}){
      if(account?.provider === 'google'){
        if(user) token.role = user.role
      }
      return token
    },
    async session({ session, token }){
      if(token?.id) session.user.id = token.id
      if(token?.role) session.user.role = token.role
      return session
    }
  }
})