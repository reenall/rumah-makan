"use client"

import Image from "next/image";
import NavItem from "./navItem";
import ModalBox from "@/components/ui/Modalbox";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";
import { IoExitOutline } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";
import Link from "next/link";
import { navList } from "@/data/navList";

export default function Navbar(){
   const [modalOpen, SetModalOpen] = useState('')
   const {data} = useSession()
   const disableNavbar = ['auth', 'admin']
   const pathname = usePathname().split('/')[1]

   return (
      <>
         <div className={`fixed z-50 pt-3 px-20 justify-between items-center w-full
            hidden 
            ${disableNavbar.includes(pathname) ? 'md:hidden' : 'md:flex'}
         `}>
            <div className="py-4">
               <Image src={'/img/brand.png'} alt="Logo" width={100} height={50} className="invert" />
            </div>

            <div className="flex items-center">
               <div className="flex gap-2">
                  {navList.map((item, index) => (
                     <NavItem type="url" key={index} title={item.title} url={item.url} />
                  ))}
                  
                  <NavItem type="button" title="Contact" border onClick={() => {SetModalOpen('contact')}} />
               </div>

               {data?.user 
                  ? (
                     <button 
                        className="ml-5 cursor-pointer"
                        onClick={() => {signOut()}}
                     >
                        <IoExitOutline className="text-secondary size-5" />
                     </button>
                  ) :
                  (
                     <button 
                        className="ml-5 cursor-pointer"  
                        onClick={() => {SetModalOpen('login')}}
                     >
                        <svg className="text-secondary size-5" aria-hidden="true" fill="none" focusable="false" viewBox="0 0 24 24"><path d="M16.125 8.75c-.184 2.478-2.063 4.5-4.125 4.5s-3.944-2.021-4.125-4.5c-.187-2.578 1.64-4.5 4.125-4.5 2.484 0 4.313 1.969 4.125 4.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M3.017 20.747C3.783 16.5 7.922 14.25 12 14.25s8.217 2.25 8.984 6.497" stroke="currentColor" strokeWidth="2.2" strokeMiterlimit="10"></path></svg>
                     </button>
                  )
               }

               {data?.user.role === 'ADMIN' || data?.user.role === 'SUPER-ADMIN'
                  ? (
                     <Link
                        href='/admin' 
                        className="ml-5 cursor-pointer"
                     >
                        <MdEngineering className="text-secondary size-5" />
                     </Link>
                  ) : null
               }

            </div>
         </div>

         {modalOpen === 'contact' && (
            <ModalBox onClose={() => SetModalOpen('')}>
               <div>
                  <h2 className="text-3xl text-primary font-display font-semibold">Contact</h2>
                  <div className="mt-10">
                     <div className="flex items-center gap-3">
                        <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
                        <p className="text-secondary">0812345678</p>
                     </div>
                  </div>
               </div>
            </ModalBox>
         )}

         {modalOpen === 'login' && (
            <ModalBox onClose={() => SetModalOpen('')}>
               <ModalLogin goToRegister={() => SetModalOpen('register')} />
            </ModalBox> 
         )}
         {modalOpen === 'register' && (
            <ModalBox onClose={() => SetModalOpen('')}>
               <ModalRegister goToLogin={() => SetModalOpen('login')} />
            </ModalBox> 
         )}
      </>
   )
}