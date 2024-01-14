import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "@/components/ClientImg"

export default function Inspo({ inspo }){

  return (
    <section className="px-6 py-16 bg-[#E9E4E0]">
      <div className={`${bricolageGrotesque.className} text-[32px] font-bold w-2/3 mb-6 lg:mb-12`}>WHAT INSPIRED OUR DESIGN</div>
      <div className="grid grid-cols-1 gap-y-8 gap-x-10 lg:grid-rows-3 lg:grid-flow-col lg:grid-cols-2 lg:max-w-[802px]">
        { inspo.map((cel) => (
          <a 
            key={cel._key} 
            href={cel.inspo_link} 
            target="_blank" 
            className="max-w-[381px] min-h-20 max-h-fit border border-black rounded-[20px] px-4 py-2 flex items-center hover:bg-white active:bg-white ease-in duration-300"
          >
            <div className="w-16 h-16 shrink-0">
              <ClientImg 
                classes={"w-full h-full  rounded-[12px]"}
                sizes={"64px"}
                img={cel} 
                />
            </div>
            <div className="font-semibold ml-5">{cel.inspo_text}</div>
          </a>
        ))}
      </div>
    </section>
  )
}