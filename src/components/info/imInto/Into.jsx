import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "@/components/ClientImg"
import './into.css'

export default function Into({ gif }){

  return (
    <div className="csb:flex w-full justify-start items-end px-6 csb:px-10">
      <div 
        className={`${bricolageGrotesque.className} font-extrabold text-[64px] sm:text-8xl tracking-[-6.4px] mr-4`}
      >
        I’M INTO
      </div>
      <div
        className="into-gif-container width-fit csb:ml-4"
      >
        <ClientImg 
          sizes={"(max-width: 1024px) 480px, 954px"}
          classes={"w-full h-auto csb:w-[480px] object-cover"}
          img={gif} 
        />
      </div>
    </div>
  )
}