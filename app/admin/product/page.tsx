import { BiSolidEditAlt } from "react-icons/bi";
import { FaTrash } from "react-icons/fa6";
import { HiPlus } from "react-icons/hi";
import Button from '@/components/ui/Button'
import React from 'react'
import Image from "next/image";
import convertCurrency from "@/utils/convertCUrrency";


function AdminProductPage() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      image: '/img/rumah-makan-1.webp',
      category: 'Food',
      price: 50000,
      status: 'active',
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/img/nasi2.jpeg',
      category: 'Drinks',
      price: 20000,
      status: 'active',
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/img/rumah-makan-1.webp',
      category: 'Dessert',
      price: 30000,
      status: 'active',
    },
    {
      id: 4,
      name: 'Product 4',
      image: '/img/rumah-makan-1.webp',
      category: 'Food',
      price: 50000,
      status: 'active',
    },
    {
      id: 5,
      name: 'Product 5',
      image: '/img/nasi2.jpeg',
      category: 'Drinks',
      price: 20000,
      status: 'inactive',
    },
    {
      id: 6,
      name: 'Product 6',
      image: '/img/rumah-makan-1.webp',
      category: 'Dessert',
      price: 30000,
      status: 'active',
    },
  ]

  return (
    <>
      <Button color='primary' className="px-20">
        <span className='flex items-center justify-center gap-1'>
          <HiPlus />
          Add Product
        </span>
      </Button>

      <table className="mt-10 mb-14 w-full border border-zinc-300">
        <thead className="bg-black">
          <tr>
            <TH width="w-[5%]">#</TH>
            <TH width="w-[10%]" textPosition="center">Image</TH>
            <TH>Name</TH>
            <TH>Category</TH>
            <TH>Price</TH>
            <TH>Status</TH>
            <TH textPosition="center">Actions</TH>
          </tr>
        </thead>
        
        <tbody className="">
          {products.map((product, index) => (
            <tr key={index} className="even:bg-zinc-100">
              <TD>{index + 1}</TD>
              <TD className="w-[75px] h-[75px]" padding="p-2">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={100} 
                  height={100} 
                  className="object-cover w-full h-full"
                />
              </TD>
              <TD>{product.name}</TD>
              <TD>{product.category}</TD>
              <TD>{convertCurrency(product.price, 'IDR')}</TD>
              <TD>{product.status === 'active' ? (
                <span className="px-2  bg-[rgb(13,148,136)] text-white">Active</span>              
              ) : (
                <span className="px-2  bg-rose-500 text-white">Inactive</span>              
              )}</TD>
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

function TD({children, className, padding}: {children: React.ReactNode, className?: string, padding?: string}) {
  return (
    <td 
      className={`text-xs text-black/80 font-normal ${className} ${padding ? `${padding}` : 'p-5'}`}
    >
      {children}
    </td>
  )
}

export default AdminProductPage