import { PortableText } from "@portabletext/react"
import ClientImg from "@/components/ClientImg"

export default function ImgLeft({ img, text, blockComponents }){ 

  return (
    <>
      <div>
        <div className="w-full h-full">
          <ClientImg fullHeight={true} objectCover={true} img={img} />
        </div>
      </div>
      <div className="p-24 flex justify-center items-center">
        <div className="w-full h-fit overflow-hidden">
          <PortableText value={text} components={blockComponents} />
        </div>
      </div>
    </>
  )
}