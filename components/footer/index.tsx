import Image from "next/image";

export default function Footer(){
  return (
    <footer className="relative pt-10 pb-24 w-full">
      <div className="flex justify-center gap-3 w-full">
        <Image src={'/icons/flourish-line.png'} alt="Flourish line" height={1000} width={1000} className="object-contain h-4 w-auto mt-2" />
        <h2 className="text-6xl font-display font-medium text-primary">
          Umbrella.
        </h2>
        <Image src={'/icons/flourish-line.png'} alt="Flourish line" height={500} width={500} className="object-contain h-4 w-auto mt-2 transform scale-x-[-1]" />
      </div>
      <p className="w-full mt-2 text-center text-secondary text-xs">Jl. Taman Mula Sakti (Alinda), Kaliabang Tengah, Kota Bekasi</p>
    </footer>
  )
}