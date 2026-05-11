import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />

      {/* nav row */}
      <div className="relative font-display">
        <div className="absolute top-0 z-10 w-full -translate-y-1/2">
          <div className="w-full h-full px-20 py-5 flex items-center shadow-lg bg-bgPrimary/50 backdrop-blur-xl border-b-2 border-primary/40">
            <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pr-22">
              <h3 className="font-medium text-xl text-secondary">Daftar Menu</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
            <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pl-5 pr-10">
              <h3 className="font-medium text-xl text-secondary">Reservasi</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
            <div className="w-max flex flex-col gap-2 border-r border-primary py-2 pl-5 pr-10">
              <h3 className="font-medium text-xl text-secondary">Petunjuk Arah</h3>
              <p className="text-sm font-medium text-yellow-500">Where are you going?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Owner */}
      <div className="relative pb-24 bg-bgPrimary">
        <div className="absolute h-full w-full">
          <div className="flex justify-center w-full h-full opacity-20">
            <Image 
              src={'https://i0.wp.com/travelista.id/wp-content/uploads/2025/05/Joglo-image-e1748624701220.png'} 
              alt="Hero image" 
              height={2000} 
              width={2000}
              className="object-cover grayscale-20"
            />
          </div>
        </div>

        <div className="pt-60 flex justify-center gap-x-20">
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
            <h2 className="text-5xl font-medium text-primary font-display">Ms. Annisa</h2>
            <p className="pt-5 text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt et, ipsam delectus libero quibusdam consectetur eaque perspiciatis officiis molestiae pariatur assumenda est dolores fugiat non ad, reiciendis laudantium tempore! Quod, obcaecati! Consequatur error atque qui eius, quo consequuntur eligendi, voluptates earum quisquam vitae officiis soluta ipsam? Accusamus sapiente voluptatem sequi.</p>
          </div>
        </div>
      </div>

      {/* Popular Dishes */}
      <div className="px-20 py-36 bg-bgPrimary">
        <div className="w-max flex flex-col items-center">
          <p className="text-secondary font-medium text-sm">Specials Choice</p>
          <h2 className="text-5xl font-display font-medium text-primary">Popular Dishes</h2>
        </div>

        {/* Cards */}
        <div className="relative my-24 w-full grid grid-cols-4 gap-x-14 gap-y-20">
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
          <div className="flex flex-col h-[500px] border-primary overflow-hidden">
            <Image 
              src={'/img/nasi1.jpg'}
              alt="Nasi image"
              height={1000}
              width={1000}
              className="object-cover brightness-75 h-[80%] w-full"
            />

            <div className="h-full flex items-center justify-between">
              <div className="w-full">
                <h2 className="text-2xl font-medium text-primary font-display line-clamp-1">Soto Betawi</h2>
                <p className="font-display text-primary font-medium">Rp. 100.000</p>
              </div>
              {/* add to cart */}
              <button className="p-2 cursor-pointer">
                <svg className="text-secondary h-[17px]
                  md:h-[18px] 
                  lg:h-[22px]" viewBox="0 -1 32 32" version="1.1" fill="currentColor" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>cart</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Icon-Set-Filled" transform="translate(-466.000000, -726.000000)" fill="currentColor"> <path d="M475.97,734 L473.475,726 L467,726 C466.447,726 466,726.448 466,727 C466,727.553 466.447,728 467,728 L472,728 L474.011,734 L474,734 L476,746 C476,748.209 477.791,750 480,750 L491,750 C493.209,750 495,748.209 495,746 L498,734 L475.97,734 L475.97,734 Z M490,752 C488.896,752 488,752.896 488,754 C488,755.104 488.896,756 490,756 C491.104,756 492,755.104 492,754 C492,752.896 491.104,752 490,752 L490,752 Z M480,752 C478.896,752 478,752.896 478,754 C478,755.104 478.896,756 480,756 C481.104,756 482,755.104 482,754 C482,752.896 481.104,752 480,752 L480,752 Z"> </path> </g> </g> </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

