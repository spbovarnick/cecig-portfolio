import ClientImg from "@/components/ClientImg"
import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"


export default function FullBleedRow({ img, text, blockComponents, textOrImg }){
  
  return (
    textOrImg === "image" ? 
      <div className="w-full h-fit">
        { img && 
          <ClientImg 
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            classes={"w-full h-auto object-contain"}
            img={img} 
          /> 
        }
      </div>
    :
      <div className="w-full min-h-fit py-16 px-6 md:py-32 md:px-0 flex items-center justify-center">
        <div className="md:w-1/2 text-center">
          {text && <PortableText value={text} components={blockComponents} /> }
        </div>
      </div>
  )
}