"use server"

import { signIn } from "@/auth";
import { prisma } from "@/lib/prisma";
import { LoginSchema, RegisterSchema } from "@/schemas/user"
import bcrypt from "bcryptjs";
import { AuthError } from "next-auth";
import z from "zod";

async function signInUser(email: string, password: string, callbackUrl?: string){
   try {
      await signIn("credentials", {email, password, redirectTo: callbackUrl})
   } catch (error) {
      if(error instanceof AuthError){
         if(error.type === 'CredentialsSignin'){
            return {
               success: false, 
               message: 'Email or password is incorrect',
               currentFieldsData: {email}
            }
         }
         return {
            success: false, 
            message: "Something went wrong",
            currentFieldsData: {email}
         }
      }
      throw error
   }
   return {success: true, message: "Success to login"}
}

export async function LoginAction(prevState: unknown, formData: FormData): Promise<{
   success: boolean, 
   message?: string, 
   errors?: Record<string, string | string[]>
   currentFieldsData?: Record<string, string>
}> {
   const parsed = LoginSchema.safeParse(Object.fromEntries(formData.entries()))
   const data: Record<string, string> = {
      email: formData?.get('email') as string,
      password: formData?.get('password') as string,
      callbackUrl: formData?.get('callbackUrl') as string
   }
   const currentFieldsData: Record<string, string> = {
      email: data.email
   } 

   if(!parsed.success){
      return {
         success: false,
         errors: z.flattenError(parsed.error).fieldErrors,
         currentFieldsData: currentFieldsData
      }
   }

   if(data.callbackUrl){
      if(!data.callbackUrl.startsWith('/') || data.callbackUrl.startsWith('//')) data.callbackUrl = '/'
   }

   const result = await signInUser(
      data.email,
      data.password,
      data.callbackUrl ? data.callbackUrl : undefined
   )

   if(!result?.success) return {...result, currentFieldsData}
   return {...result}
}

export async function RegisterAction(prevState: unknown, formData: FormData){
   const parsed = RegisterSchema.safeParse(Object.fromEntries(formData.entries()))
   const userData = {
      name: formData?.get('name') as string,
      email: formData?.get('email') as string,
      password: formData?.get('password') as string,
      phone: formData?.get('phone') as string
   } 
   const currentFieldsData: Record<string, string> = {...userData}
   delete currentFieldsData.password

   if(!parsed.success){
      return {
         success: false,
         errors: z.flattenError(parsed.error).fieldErrors,
         currentFieldsData: currentFieldsData
      }
   }

   const user = await prisma.user.findUnique({ where: {email: userData.email} })
   if(user){
      return {
         success: false, 
         message: "Email already exists",
         currentFieldsData
      }
   }

   try {
      await prisma.user.create({
         data: {
            ...userData, 
            password: await bcrypt.hash(userData.password, 10),
            role: 'USER'
         }
      })
   } catch (error) {
      return {
         success: false, 
         message: "Something went wrong while creating user, please try again",
         currentFieldsData
      }
   }

   const login = await signInUser(
      formData?.get('email') as string, 
      formData?.get('password') as string
   )

   if(!login.success){
      return {
         success: true, 
         message: "Success to create user but failed to login, please try to login manually",
      }
   } else {
      return {success: true, message: "Success to create user"}
   }
}