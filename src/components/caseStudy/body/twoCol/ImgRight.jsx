import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgRight({ text, img, blockComponents }){ 

  return (
    <>
      <div className="py-16 px-6 csb:px-24 csb:py-24 flex justify-center items-center">
        <div className="w-full h-full overlfow- csb:overflow-hidden">
          {text && <PortableText value={text} components={blockComponents} />}
        </div>
      </div>
      <div className="">
        <div className="csb:flex csb:items-start w-full h-full">
          {img && 
            <ClientImg 
              sizes={"(max-width: 1024px) 100vw, 50vw"}
              classes={"w-full h-full object-contain"}
              img={img} 
            />
          }
        </div>
      </div>
    </>
  )
}