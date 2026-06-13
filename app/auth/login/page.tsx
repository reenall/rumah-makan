import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { LuLock } from "react-icons/lu";


function LoginPage() {
  return (
    <div className='text-white  w-full h-full'>
      <h2 className='text-center text-6xl font-display font-medium text-primary'>
        Login
      </h2>

      <div className='mt-10'>
         <button className='w-full py-2 px-3 bg-transparent text-primary'>
            <p className='flex items-center justify-center gap-2 text-sm'>
               <FcGoogle />
               Login with Google
            </p>
         </button>

         <div className='my-10 flex items-center gap-3'>
            <div className='w-full h-px bg-zinc-700 rounded-full' />
            <p className='text-center text-zinc-500 text-xs font-bold'>or</p>
            <div className='w-full h-px bg-zinc-700 rounded-full' />
         </div>

         <form
            className='flex flex-col gap-3'
         >
            <Input name="email" type="email" placeholder="E-mail" icon={<AiOutlineUser />} />
            <Input name="password" type="password" placeholder='Password' icon={<LuLock />} />
            <button type='submit' className='mt-8 px-5 py-2 bg-primary text-black text-sm font-semibold'>Login</button>
         </form>

         <Link
            href={'/auth/register'}
            className='block mt-10'
         >
            <p className='text-xs text-center text-secondary'>
               {`Don't have an account? Register here`}
            </p>
         </Link>
      </div>
    </div>
  )
}

export default LoginPage

type InputProps = {
   name: string
   type: "text" | "password" | "email" | "number"
   placeholder: string
   icon?: React.ReactNode
}

function Input(props: InputProps) {
   const {name, type, placeholder, icon} = props

   return (
      <div className='flex items-center'>
         {icon && <div className='text-secondary opacity-50'>{icon}</div>}
         <input 
            name={name}
            type={type}
            placeholder={placeholder}
            className='px-3 py-2 text-sm text-secondary w-full outline-0'
            autoComplete='off'
         />
      </div>
   )
}