import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="relative ">
        <div className="absolute top-0 z-10 w-full px-40 h-32 -translate-y-1/2">
          <div className="w-full h-full px-7 flex items-center  shadow-lg bg-black/50 backdrop-blur-xl">
            <div className="w-max flex flex-col gap-2 border-r border-slate-500 py-2 pr-20">
              <h3 className="font-medium text-xl text-secondary">Daftar Menu</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
            <div className="w-max flex flex-col gap-2 border-r border-slate-500 py-2 pl-5 pr-10">
              <h3 className="font-medium text-xl text-secondary">Reservasi</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
            <div className="w-max flex flex-col gap-2 border-r border-slate-500 py-2 pl-5 pr-10">
              <h3 className="font-medium text-xl text-secondary">Petunjuk Arah</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="px-20 h-screen bg-[#1b2e1e]"> */}
      <div className="px-20 h-screen bg-gray-200">
        <div className=" h-full w-full border-x border- border-yellow-500/50">
          <div className="flex justify-center w-full opacity-30">
            <Image 
              src={'/img/logo.png'} 
              alt="Hero image" 
              height={500} 
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

