import Link from 'next/link'
import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { LuLock } from "react-icons/lu";


function RegisterPage() {
  return (
    <div className='text-white  w-full h-full'>
      <h2 className='text-center text-6xl font-display font-medium text-primary'>
        Register
      </h2>

      <div className='mt-14'>
         <button className='w-full py-2 px-3 bg-transparent text-primary border border-dashed border-primary'>
            <p className='flex items-center justify-center gap-2 text-sm'>
               <FcGoogle />
               Register with Google
            </p>
         </button>

         <Link
            href={'/auth/login'}
            className='block mt-10'
         >
            <p className='text-xs text-center text-secondary'>
               {`Already have an account? Login here`}
            </p>
         </Link>
      </div>
    </div>
  )
}

export default RegisterPage

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