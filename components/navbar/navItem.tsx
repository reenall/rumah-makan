"use client"

import Link from "next/link"

type NavItemProps = {
   title: string
   url: string
   border?: boolean
}

function NavItem(props: NavItemProps) {
   const {title, url, border} = props

  return (
    <Link 
      href={url} 
      // className={`px-5 py-1 ${border ? 'border-2 border-primary' : ''}`}>
      className={`px-5 py-1 ${border ? 'border-2 border-primary' : ''}`}>
        <p className="font-medium text-sm text-gray-200">{title}</p>
    </Link>
  )
}

export default NavItem