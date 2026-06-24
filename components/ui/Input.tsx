type InputProps = {
   name: string
   type: "text" | "password" | "email" | "number"
   placeholder: string
   icon?: React.ReactNode
   error?: string
   defaultValue?: string
}

export default function Input(props: InputProps) {
   const {name, type, placeholder, icon, error, defaultValue} = props

   return (
      <>
         {error ? <p className='text-sm text-red-500'>{error}</p> : null}
         <div className='flex items-center'>
            {icon && <div className='text-secondary opacity-50'>{icon}</div>}
            <input 
               name={name}
               type={type}
               placeholder={placeholder}
               defaultValue={defaultValue}
               className='px-3 py-2 text-sm text-secondary w-full outline-0'
               autoComplete='off'
            />
         </div>
      </>
   )
}