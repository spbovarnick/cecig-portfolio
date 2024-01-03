import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "@/components/ClientImg"
import './into.css'

export default function Into({ gif }){

  return (
    <div>
      <div 
        className={`${bricolageGrotesque.className} font-extrabold text-8xl tracking-[-9.6px]`}
      >
        I’M INTO
      </div>
      <div
        className="into-gif-container"
      >
        <ClientImg img={gif} />
      </div>
    </div>
  )
}