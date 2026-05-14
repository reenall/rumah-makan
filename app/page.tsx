import Footer from "@/components/footer";
import Card from "@/components/fragments/card";
import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* Owner */}
      <div className="relative pb-36">
        {/* BG */}
        <div className="absolute h-full w-full">
          <div className="flex justify-center w-full h-full opacity-20">
            <Image 
              src={'/img/rumah-makan-1.webp'} 
              alt="Hero image" 
              height={2000} 
              width={2000}
              className="object-cover grayscale-20"
            />
          </div>
        </div>

        {/* -------- RAPIHIN LAGI -------- */}
        {/* Navigation Row */}
        <div className="absolute top-0 z-10 w-full -translate-y-1/2">
          <div className="flex flex-col shadow-lg bg-bgPrimary/50 backdrop-blur-xl  border-b-2 border-primary/40">
            <div className=" px-20 py-5 flex justify-between">
              <div className="w-max h-full flex items-center">
                <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pr-22">
                  <h3 className="font-medium font-display text-xl text-secondary">Daftar Menu</h3>
                  <p className="text-sm font-medium text-primary">Where are you going?</p>
                </div>
                <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pl-5 pr-10">
                  <h3 className="font-medium font-display text-xl text-secondary">Reservasi</h3>
                  <p className="text-sm font-medium text-primary">Where are you going?</p>
                </div>
                <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pl-5 pr-10">
                  <h3 className="font-medium font-display text-xl text-secondary">Petunjuk Arah</h3>
                  <p className="text-sm font-medium text-primary">Where are you going?</p>
                </div>
              </div>
              {/* Opening Hours */}
              <div className="flex items-end">
                <h3 className="font-medium text-sm text-primary border-2 border-primary  border-dashed px-5 py-1">Senin - Minggu: 08:00 - 21:00</h3>
              </div>
            </div>
            {/* <Image src={'/icons/divider-2.png'} alt="Divider" height={2000} width={2000} className="w-full h-8 opacity-70" /> */}
          </div>
        </div>
        {/* END navigation row */}

        <div className="pt-52 flex justify-center gap-x-20">
          <div className="w-125 h-125">
            <Image
              src={'/img/owner.png'}
              alt="Hero image"
              height={2000}
              width={2000}
              className="object-cover brightness-75"
            />
          </div>
          <div className="pt-20 w-125 h-125">
            <h2 className="text-6xl font-medium text-primary font-display">Ms. Annisa</h2>
            <p className="pt-5 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt et, ipsam delectus libero quibusdam consectetur eaque perspiciatis officiis molestiae pariatur assumenda est dolores fugiat non ad, reiciendis laudantium tempore! Quod, obcaecati! Consequatur error atque qui eius, quo consequuntur eligendi, voluptates earum quisquam vitae officiis soluta ipsam? Accusamus sapiente voluptatem sequi.</p>
          </div>
        </div>

        {/* <div className="pt-0 w-1/2 mx-auto">
          <Image src={'/icons/divider-3.png'} alt="Divider" height={2000} width={2000} className="w-full h-auto opacity-80 object-contain" />
        </div> */}
      </div>

      {/* Popular Dishes */}
      <div className="px-20 pt-28 pb-36 bg-bgPrimary">
        <div className="w-max flex flex-col items-center">
          <p className="text-secondary font-medium text-sm">Special Choices</p>
          <div className="flex gap-3">
            <Image src={'/icons/flourish-line.png'} alt="Flourish line" height={1000} width={1000} className="object-contain h-4 w-auto mt-2" />
            <h2 className="text-6xl font-display font-medium text-primary">
                Popular {' '}
              <span className="relative">
                <span className="relative z-20">
                  Dishes
                </span>
                <div className="absolute z-0 top-0 -left-10 h-full w-[150%]">
                  <Image src={'/icons/oval-brush-2.png'} alt="Flourish line" height={500} width={500} className="object-contain h-full w-full opacity-50" />
                </div>
              </span>
            </h2>
            <Image src={'/icons/flourish-line.png'} alt="Flourish line" height={500} width={500} className="object-contain h-4 w-auto mt-2 transform scale-x-[-1]" />
          </div>
        </div>

        {/* Cards */}
        <div className="relative my-30 w-full grid grid-cols-4 gap-14">
          <Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          />

          <Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          /><Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          /><Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          /><Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          /><Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          /><Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          />
          <Card
            image="/img/nasi1.jpg"
            title="Soto Betawi"
            price={100000}
          />
        </div>
      </div>

      <Footer />
      {/* <WhatsappButton /> */}
    </div>
  );
}

function WhatsappButton() {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      <div className="flex flex-col gap-1 items-center">
        <svg className="w-11 h-11 text-primary" fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z"></path><path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z"></path></g></svg>
        <p className="font-medium text-sm text-primary">Whatsapp</p>
      </div>
    </div>
  );
}