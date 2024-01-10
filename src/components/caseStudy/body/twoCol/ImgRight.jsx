import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgRight({ text, img, blockComponents }){ 

  return (
    <>
      <div className="p-24 flex justify-center items-center">
        <div className="w-full h-fit overflow-hidden">
          {text && <PortableText value={text} components={blockComponents} />}
        </div>
      </div>
      <div>
        <div className="w-full h-full">
          {img && 
            <ClientImg 
              sizes={"(max-width: 1024px) 100vw, 50vw"}
              classes={"w-full h-full object-cover"}
              img={img} 
            />
          }
        </div>
      </div>
    </>
  )
}