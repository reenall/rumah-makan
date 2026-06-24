import { email, object, string } from "zod";

export const LoginSchema = object({
   email: email(),
   password: string().min(6, "Password at least 6 characters").max(20, "Password max 20 characters")
})

export const RegisterSchema = object({
   name: string().min(3, "Name at least 3 characters").max(20, "Name max 20 characters"),
   email: email(),
   password: string().min(6, "Password at least 6 characters").max(20, "Password max 20 characters"),
   confirmPassword: string().min(6, "Password at least 6 characters").max(20, "Password max 20 characters"),
   phone: string()
}).refine((data) => data.password === data.confirmPassword, {
   message: "Passwords doesn't match",
   path: ["confirmPassword"]
})