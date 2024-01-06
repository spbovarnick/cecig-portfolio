import ClientImg from "@/components/ClientImg"
import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"


export default function FullBleedRow({ img, text, blockComponents, textOrImg }){
  
  return (
    textOrImg === "image" ? 
      <div className="w-full h-718">
        <ClientImg fullHeight={true} objectCover={true} img={img} />
      </div>
    :
      <div className="w-full min-h-718 flex items-center justify-center">
        <div className="w-1/2 text-center">
          <PortableText value={text} components={blockComponents} />
        </div>
      </div>
  )
}