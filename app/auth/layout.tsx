import Image from "next/image";
import Link from 'next/link'
import { RiArrowLeftLongFill } from "react-icons/ri";

export default function AuthLayout({children}: {children: React.ReactNode}) {
   return (
      <>
         <div className="w-screen h-screen flex">
            <div className="relative w-full h-full">
               <Image 
                  src={'/img/sambal-1.jpg'}
                  alt="Auth Image"
                  width={2000}
                  height={2000}
                  className="w-full h-full object-cover brightness-75"
               />         
            </div>
            <div className="h-full w-150 px-14 pt-32 pb-20 flex justify-center items-center">
               {children}
            </div>
         </div>

         <div className="absolute z-20 top-10 left-1/2 -translate-x-1/2 border-2 border-dashed border-primary px-3 py-1">
            <Link href={'/'}>
               <p className='flex items-center gap-1 text-sm text-secondary'>
                  <RiArrowLeftLongFill />
                  Back to Home
               </p>
            </Link>
         </div>
      </>
   )
}