import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";

export async function middleware(req: NextRequest){
   const requireAuth = ['admin', 'checkout']
   const onlyAdmin = ['admin']
   const allowedToAdminPage = ['ADMIN', 'SUPER-ADMIN']
   const authPage = ['auth']

   const pathname = req.nextUrl.pathname.split('/')[1]
   const fullPath = req.nextUrl.pathname + req.nextUrl.search
   const callbackUrl = encodeURIComponent(fullPath)
   
   const session = await auth()
   const user = session?.user

   if(requireAuth.includes(pathname)){
      if(!user) return NextResponse.redirect(new URL(`/auth/login?callbackUrl=${callbackUrl}`, req.url))
      if(onlyAdmin.includes(pathname) && !allowedToAdminPage.includes(user.role)){
         return NextResponse.redirect(new URL('/', req.url))
      }
   }
   if(authPage.includes(pathname) && user) return NextResponse.redirect(new URL('/', req.url))
}