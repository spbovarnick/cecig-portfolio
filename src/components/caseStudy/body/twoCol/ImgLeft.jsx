import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgLeft({ img, text, blockComponents }){ 

  return (
    <>
      <div>
        <div className="w-full h-full">
          {img && 
            <ClientImg 
              classes={"w-full h-full object-cover"}
              sizes={"(max-width: 1024px) 100vw, 50vw"}
              img={img} 
            />
          }
        </div>
      </div>
      <div className="p-24 flex justify-center items-center">
        <div className="w-full h-fit overflow-hidden">
          {text && <PortableText value={text} components={blockComponents} />}
        </div>
      </div>
    </>
  )
}