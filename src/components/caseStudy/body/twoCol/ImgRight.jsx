import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgRight({ text, img, blockComponents }){ 

  return (
    <>
      <div className="py-16 px-6 csb:px-24 csb:py-24 flex justify-center items-center">
        <div className="w-full h-fit  csb:overflow-hidden">
          {text && <PortableText value={text} components={blockComponents} />}
        </div>
      </div>
      <div className="w-full h-full csb:flex csb:justify-start">
        {img && 
          <ClientImg 
          classes={"w-full h-full csb:w-auto object-contain"}
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            img={img} 
          />
        }
      </div>
    </>
  )
}