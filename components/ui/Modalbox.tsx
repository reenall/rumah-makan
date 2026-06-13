"use client"
   
import { useEffect, useRef } from 'react'

type ModalProps = {
   children: React.ReactNode
   onClose: () => void
}

export default function ModalBox(props: ModalProps){
   const {children, onClose} = props
   const ref = useRef<HTMLDivElement>(null)

   useEffect(() => {
      function handleClickOutside(event: MouseEvent){
         if (ref.current && !ref.current.contains(event.target as Node)) onClose()
      }
      function handleKeyDown(event: KeyboardEvent){
         if(event.key === 'Escape') onClose()
      }

      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleKeyDown)

      return () => {
         document.body.style.overflow = ''
         document.documentElement.style.overflow = ''
         document.removeEventListener('mousedown', handleClickOutside)
         document.removeEventListener('keydown', handleKeyDown)
      }
   }, [onClose])


   return (
      <div className="fixed top-0 left0 z-50 w-screen h-screen bg-black/50 flex justify-center items-center">
         <div ref={ref} className="w-max max-h-[80vh] overflow-x-auto bg-black px-10 py-9">
            {children}
         </div>
      </div>
   )
}