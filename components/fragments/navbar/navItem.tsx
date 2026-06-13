"use client"

import Link from "next/link"

type NavItemProps = {
   title: string
   url?: string
   onClick?: () => void
   border?: boolean
   type: "url" | "button"
}

function NavItem(props: NavItemProps) {
   const {title, url, onClick, border, type} = props

  return (
    <>
      { type === "url"  && url &&
          <Link 
          href={url} 
          className={`px-5 py-1 ${border ? 'border-3 border-primary' : ''}`}>
            <p className="font-medium text-sm text-gray-200">{title}</p>
          </Link>
      }

      { type === "button" && onClick &&
          <button 
          onClick={onClick}
          className={`px-5 py-1 cursor-pointer ${border ? 'border-3 border-primary' : ''}`}>
            <p className="font-medium text-sm text-gray-200">{title}</p>
          </button>
      }
    </>
  )
}

export default NavItem