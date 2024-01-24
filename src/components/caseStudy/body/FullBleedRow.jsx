import ClientImg from "@/components/ClientImg"
import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"

const blockComponents = {
  types: {
    scope_step: ({ value }) => {
      return (
        <div className="flex items-center h-fit w-fit mb-6">
          <div className={`${bricolageGrotesque.className} text-5xl text-black font-bold w-[76px] h-[76px] p-2 flex items-center justify-center bg-[#75FA4D] rounded-full mr-6`}>{value.scope_step}</div>
          <div className="font-semibold">{value.name}</div>
        </div>
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover-link-ui"
        >
          {children}
        </a>
      )
    }
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    number: ({ children }) => <ol className="list-inside list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-md">{children}</li>
  },
  block: {
    normal: ({ children }) => <h1 className={`${bricolageGrotesque.className} font-bold text-[32px]`}>{children}</h1>,
    h1: ({ children }) => <h1 className={`${bricolageGrotesque.className} font-bold text-5xl`}>{children}</h1>,
    h2: ({ children }) => <h1 className={`${bricolageGrotesque.className} font-bold text-[32px]`}>{children}</h1>,
    h3: ({ children }) => <h3 className="font-bold text-[32px] mb-6">{children}</h3>,
  }
}


export default function FullBleedRow({ img, text, textOrImg, bgColor, textColor }){
  
  return (
    textOrImg === "image" ? 
      <div className="w-full h-auto flex items-center min-h-fit">
        { img && 
          <ClientImg 
            sizes={"(max-width: 1536px) 100vw, 50vw"}
            classes={"w-full h-auto object-contain"}
            img={img} 
          /> 
        }
      </div>
    :
      <div className={`w-full min-h-fit py-16 px-6 md:py-32 md:px-0 flex items-center justify-center`}
        style={{backgroundColor: bgColor ? bgColor.hex : 'white'}}
      >
        <div 
          className="md:w-1/2 text-center"
          style={{color: textColor? textColor.hex : 'black'}}
        >
          {text && <PortableText value={text} components={blockComponents} /> }
        </div>
      </div>
  )
}