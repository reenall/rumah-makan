import Image from 'next/image'

function Hero() {
  return (
   <div className="relative w-full h-screen overflow-hidden">
      <Image
         src={'/img/nasi2.jpeg'}
         alt="Hero image"
         width={2000}
         height={2000}
         className="w-full h-full object-cover object-[center_25%]"
      />

      {/* TEXT */}
      {/* <div className="absolute top-0 bottom-0 w-[50%] bg-linear-to-r from-[#07183d]/80 via-[#07183d]/70 to-transparent via-80%"> */}
      <div className="absolute top-0 bottom-0 w-[50%] bg-linear-to-r from-bgPrimary/80 via-bgPrimary/70 to-transparent via-80%">
         <div className={`w-[80%] h-full flex flex-col gap-10 pt-52 pb-20 pl-22 font-display`}>
            <h1 className="text-[80px] text-primary leading-none font-display font-semibold">Wonderful <span className=''>Food </span> <span className="block ">Vacation</span></h1>
            <p className="text-xl text-slate-300 font-medium">Book Hotels, Flights and Stay packages at lowest price</p>
         </div>
      </div>
   </div>
  )
}

export default Hero