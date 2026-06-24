"use client"

import Link from 'next/link'
import React, { useActionState } from 'react'
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import Input from '@/components/ui/Input';
import { FcGoogle } from "react-icons/fc";
import { AiOutlineUser } from 'react-icons/ai';
import { LuLock, LuPencilLine, LuPhone } from 'react-icons/lu';
import { RegisterAction } from '@/actions/LoginAction';


function RegisterPage() {
   const callbackUrl = useSearchParams()?.get('callbackUrl')
   const [state, formAction, isLoading] = useActionState(RegisterAction, null)

  console.log('state', state);

  return (
    <div className='w-full h-full'>
      <h2 className='text-center text-6xl font-display font-medium text-primary'>
        Register
      </h2>

      <div className='mt-14'>
         <button 
            onClick={() => signIn('google', { callbackUrl: callbackUrl ?? '/' })}
            className='w-full py-2 px-3 bg-transparent text-primary border border-dashed border-primary hover:opacity-75 cursor-pointer'
         >
            <p className='flex items-center justify-center gap-2 text-sm'>
               <FcGoogle />
               Register with Google
            </p>
         </button>

         <form
            className='flex flex-col gap-3'
            action={formAction}
         >
            <Input 
               name="name" 
               type="text" 
               placeholder='Name' 
               defaultValue={state?.currentFieldsData?.name} 
               icon={<LuPencilLine />} 
               error={state?.errors?.name?.[0]} 
            />
            <Input 
               name="email" 
               type="email" 
               placeholder="E-mail" 
               defaultValue={state?.currentFieldsData?.email} 
               icon={<AiOutlineUser />} 
               error={state?.errors?.email?.[0]} 
            />
            <Input 
               name="phone" 
               type="text" 
               placeholder='Phone' 
               defaultValue={state?.currentFieldsData?.phone} 
               icon={<LuPhone />} 
               error={state?.errors?.phone?.[0]} 
            />
            <Input 
               name="password" 
               type="password" 
               placeholder='Password' 
               icon={<LuLock />} 
               error={state?.errors?.password?.[0]} 
            />
            <Input 
               name="confirmPassword" 
               type="password" 
               placeholder='Confirm Password' 
               icon={<LuLock />} 
               error={state?.errors?.password?.[0]} 
            />

            <button type='submit' disabled={isLoading} className={`mt-8 px-5 py-2 bg-primary text-black text-sm font-semibold cursor-pointer hover:opacity-75 ${isLoading ? 'opacity-75' : ''}`}>{isLoading ? 'Loading...' : 'Register'}</button>
         </form>

         <Link
            href={callbackUrl ? `/auth/login?callbackUrl=${callbackUrl}` : '/auth/login'}
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