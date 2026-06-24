"use client"

import Link from 'next/link'
import React, { useActionState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { LuLock } from "react-icons/lu";
import { LoginAction } from '@/actions/LoginAction';
import { signIn } from 'next-auth/react';
import Input from '@/components/ui/Input';

function ModalRegister({goToLogin}: {goToLogin: () => void}) {

  return (
   <div className='text-white min-w-100 w-full h-full'>
      <h2 className='text-center text-6xl font-display font-medium text-primary'>
         Register
      </h2>

      <div className='mt-14'>
         <button 
            onClick={() => signIn('google')}
            className='w-full py-2 px-3 bg-transparent text-primary border border-dashed border-primary hover:opacity-75 cursor-pointer'
         >
            <p className='flex items-center justify-center gap-2 text-sm'>
               <FcGoogle />
               Register with Google
            </p>
         </button>

         <button
            onClick={goToLogin}
            className='block mt-10 cursor-pointer mx-auto'
         >
            <p className='text-xs text-center text-secondary'>
               {`Already have an account? Login here`}
            </p>
         </button>
      </div>
   </div>
  )
}

export default ModalRegister