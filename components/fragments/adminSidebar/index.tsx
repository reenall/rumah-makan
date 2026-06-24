import { adminNavList, navList } from "@/data/navList"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function AdminSidebar(){
  const pathname = usePathname()

  return (
    <div className="sticky top-0 h-screen w-[20%] pt-14 border border-dashed border-zinc-300">
      <ul>
        <h2 className="text-2xl text-center font-display font-semibold mb-10">Admin Panel</h2>
        {adminNavList.map((item, index) => (
          <SidebarItem
            key={index}
            title={item.title}
            url={item.url}
            isActive={item.url === pathname}
          />
        ))}
      </ul>

      <ul className="mt-14">
        <h2 className="text-2xl text-center font-display font-semibold mb-10">Main Page</h2>
        {navList.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              title={item.title}
              url={item.url}
              isActive={item.url === pathname}
            />
          )
        })}
      </ul>
    </div>
  )
}

function SidebarItem({title, url, isActive, icon}: {title: string, url: string, isActive?: boolean, icon?: React.ReactNode}) {
  return (
    <li>
      <Link
        href={url}
        className={`block pl-5 py-1 w-[90%] rounded-r-full text-sm font-display font-medium hover:bg-zinc-200 hover:text-black ${isActive ? 'bg-black text-secondary' : 'bg-transparent text-black'}`}
      >
        <span className='flex items-center gap-2'>
          {icon}
          {title}
        </span>
      </Link>
    </li>
  )
}