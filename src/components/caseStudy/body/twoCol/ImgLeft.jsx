import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgLeft({ img, text, blockComponents }){ 

  return (
    <>
      <div className="w-full h-full csb:flex csb:flex-end">
        {img && 
          <ClientImg 
          classes={"w-full h-full csb:w-auto object-contain"}
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            img={img} 
          />
        }
      </div>
      <div className="py-16 px-6 csb:px-24 csb:py-24 flex justify-center items-center">
        <div className="w-full h-fit justify-center csb:overflow-hidden">
          {text && <PortableText value={text} components={blockComponents} />}
        </div>
      </div>
    </>
  )
}