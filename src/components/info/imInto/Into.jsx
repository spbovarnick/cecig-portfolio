import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "@/components/ClientImg"
import './into.css'

export default function Into({ gif }){

  return (
    <div className="lg:flex w-full justify-center items-end">
      <div 
        className={`${bricolageGrotesque.className} font-extrabold text-8xl tracking-[-9.6px] mr-4`}
      >
        I’M INTO
      </div>
      <div
        className="into-gif-container ml-4"
      >
        <ClientImg 
          sizes={"(max-width: 1024px) 100vw, 50vw"}
          classes={"w-full h-full object-cover"}
          img={gif} 
        />
      </div>
    </div>
  )
}