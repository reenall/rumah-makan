import { GrNotes } from "react-icons/gr";
import React from 'react'


function AdminOrderPage() {
  const orders = [
    { id: '1775574577434-0.e169eb03c71b9', email: 'a@b.com', total: '1000', status: 'settled' },
    { id: '2775574577434-0.e169eb03c8910', email: 'a@b.com', total: '1000', status: 'settled' },
    { id: '3775574577434-0.e169eb03c9812', email: 'a@b.com', total: '1000', status: 'settled' },
    { id: '4775574577434-0.e169eb03c71b9', email: 'a@b.com', total: '1000', status: 'pending' },
    { id: '5775574577434-0.e169eb03c71b9', email: 'a@b.com', total: '1000', status: 'settled' },
  ]

  return (
    <>
      <table className="mt-10 w-full shadow-xl border-zinc-300">
        <thead className="bg-black">
          <tr>
            <TH width="w-[5%]">#</TH>
            <TH>Order ID</TH>
            <TH>E-mail</TH>
            <TH>Total</TH>
            <TH>Status</TH>
            <TH textPosition="center">Actions</TH>
          </tr>
        </thead>
        
        <tbody className="">
          {orders.map((order, index) => (
            <tr key={index} className="even:bg-zinc-100">
              <TD>{index + 1}</TD>
              <TD>{order.id}</TD>
              <TD>{order.email}</TD>
              <TD>{order.total}</TD>
              <TD>{order.status}</TD>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <button className="bg-zinc-100 p-2 rounded-sm text-lg"><GrNotes /></button>
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

export default AdminOrderPage