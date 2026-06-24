import { BiSolidEditAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import Button from '@/components/ui/Button'
import React from 'react'


function AdminUserPage() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'iB2tK@example.com',
      phone: '08999999999',
      role: 'admin'
    },
    {
      id: 2,
      name: 'John Doe 2',
      email: 'iB2tK@example.com',
      phone: '08999999999',
      role: 'admin'
    },
    {
      id: 3,
      name: 'John Doe 3',
      email: 'iB2tK@example.com',
      phone: '08999999999',
      role: 'admin'
    },
    {
      id: 4,
      name: 'John Doe 4',
      email: 'iB2tK@example.com',
      phone: '08999999999',
      role: 'admin'
    },
  ]

  return (
    <>
      <Button color='primary' className="px-20">
        <span className='flex items-center justify-center gap-1'>
          <HiPlus />
          Add User
        </span>
      </Button>

      <table className="mt-10 w-full shadow-xl border-zinc-300">
        <thead className="bg-black">
          <tr>
            <TH width="w-[5%]">#</TH>
            <TH>Name</TH>
            <TH width="w-[30%]">E-mail</TH>
            <TH>Phone</TH>
            <TH>Role</TH>
            <TH textPosition="center">Actions</TH>
          </tr>
        </thead>
        
        <tbody className="">
          {users.map((user, index) => (
            <tr key={index} className="even:bg-zinc-100">
              <TD>{index + 1}</TD>
              <TD>{user.name}</TD>
              <TD>{user.email}</TD>
              <TD>{user.phone}</TD>
              <TD>{user.role}</TD>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <button className="bg-zinc-100 p-2 rounded-sm text-lg"><BiSolidEditAlt /></button>
                  <button className="bg-zinc-100 p-2 rounded-sm text-sm"><FaTrash /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

function TH({children, width, textPosition}: {children: React.ReactNode, width?: string, textPosition?: 'left' | 'right' | 'center'}) {
  return (
    <th 
      className={`text-xs text-white px-5 py-5 font-normal ${width ? `${width}` : ''} ${textPosition ? `text-${textPosition}` : 'text-left'}`}
    >
      {children}
    </th>
  )
}

function TD({children}: {children: React.ReactNode}) {
  return (
    <td 
      className={`text-xs text-black/80 px-5 py-5 font-normal}`}
    >
      {children}
    </td>
  )
}

export default AdminUserPage