"use client"

import AdminSidebar from '@/components/fragments/adminSidebar'
import { adminNavList } from '@/data/navList'
import { usePathname } from 'next/navigation'


function AdminLayout({children}: {children: React.ReactNode}) {
  const pathname = usePathname()
  const title = adminNavList.find((item) => item.url === pathname)

  return (
    <div className="min-h-screen flex bg-bgSecondary px-5">
      {<AdminSidebar />}
      <div className="w-[80%] pt-14 h-full border-r border-dashed border-zinc-300">
        <h1 className="text-5xl first-letter:text-7xl text-center font-display font-semibold">{title?.title}</h1>
        <div className="px-10 mt-10">
          {children}
        </div>
      </div>
    </div>
  )
}

export default AdminLayout