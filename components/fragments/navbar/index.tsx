"use client"

import Image from "next/image";
import NavItem from "./navItem";

export default function Navbar(){
   const navList = [
      {title: "Home", url: '/'},
      {title: "Product", url: '/product'},
      {title: "Contact", url: '/contact', border: true},
   ]

   return (
      <div className="fixed z-50 pt-3 px-20 flex justify-between items-center w-full">
         <div className="py-4">
            <Image src={'/img/brand.png'} alt="Logo" width={100} height={50} className="invert" />
         </div>

         <div className="flex gap-2">
            {navList.map((item, index) => (
               <NavItem key={index} title={item.title} url={item.url} border={item.border} />
            ))}
            {/* <button className="bg-yellow-400 px-5 py-2 rounded-full">
               <p className="text-sm font-semibold">Sign In</p>
            </button> */}
         </div>
      </div>
   )
}