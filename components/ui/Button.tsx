import React from 'react'

type ButtonProps = {
   children: React.ReactNode,
   onClick?: () => void,
   className?: string,
   disabled?: boolean,
   type?: 'submit' | 'reset' | 'button',
   loading?: boolean,
   color?: 'primary' | 'secondary',
}

function Button(props: ButtonProps) {
  const {children, onClick, className, disabled, type, loading, color} = props

  return (
    <button 
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center justify-center py-2 px-10 bg-black text-white hover:opacity-75 cursor-pointer ${className}`}
      type={type}
    >
      <p className="text-xs">
        {loading 
          ? ('Loading...') 
          : (children)
        }
      </p>
    </button>
  )
}

export default Button