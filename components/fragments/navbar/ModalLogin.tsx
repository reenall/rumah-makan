"use client"

import Link from 'next/link'
import React, { useActionState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from "react-icons/ai";
import { LuLock } from "react-icons/lu";
import { LoginAction } from '@/actions/LoginAction';
import { signIn } from 'next-auth/react';
import Input from '@/components/ui/Input';

function ModalLogin({goToRegister}: {goToRegister: () => void}) {
   const [state, formAction, isLoading] = useActionState(LoginAction, null)

  return (
   <div className='text-white min-w-100 w-full h-full'>
      <h2 className='text-center text-6xl font-display font-medium text-primary'>
      Login
      </h2>
      
      <div className='mt-10'>
         <button 
            onClick={() => signIn('google')}
            className='w-full py-2 px-3  text-primary bg-transparent border border-transparent border-dashed hover:border-primary hover:opacity-75 cursor-pointer'
         >
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

         {state?.success === false ? (
            <p className='text-sm text-red-500 text-center mb-5'>{state?.message}</p>
         ) : null}

         <form
            className='flex flex-col gap-3'
            action={formAction}
         >
            <Input name="email" type="email" placeholder="E-mail" icon={<AiOutlineUser />} defaultValue={state?.currentFieldsData?.email} error={state?.errors?.email?.[0]} />
            <Input name="password" type="password" placeholder='Password' icon={<LuLock />} error={state?.errors?.password?.[0]} />
            <button 
               type='submit' 
               disabled={isLoading} 
               className={`mt-8 px-5 py-2 bg-primary text-black text-sm font-semibold cursor-pointer hover:opacity-75 ${isLoading ? 'opacity-75' : ''}`}
            >
               {isLoading ? 'Loading...' : 'Login'}
            </button>
         </form>

         <button
            onClick={goToRegister}
            className='block mt-10 w-max mx-auto cursor-pointer'
         >
            <p className='text-xs text-center text-secondary'>
               {`Don't have an account? Register here`}
            </p>
         </button>
      </div>
   </div>
  )
}

export default ModalLogin