import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "@/components/ClientImg"

const blockComponents = {
  marks: {
    link: ({ value, children }) => {
      return (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-2 decoration-2 decoration-[#EB56E8] ease-in duration-300"
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
    normal: ({ children }) => <p className="mt-4">{children}</p>
  },
}

export default function AboutMe({ blurb, headshot }) {

  return (
    <>
      {headshot &&
        <div className="w-full h-full csb:w-2/5 csb:pt-[3px] flex items-start">
          <ClientImg 
            classes={"w-full h-auto object-contain"}
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            img={headshot} 
          />
        </div>
      }
      <div 
        id="info-blurb"
        className="px-6 csb:px-0 csb:pl-[72px] csb:flex csb:max-w-[60%] csb:items-start mt-4"
      >
        <div 
          className="w-full h-fit"
        >
          <div className={`${bricolageGrotesque.className} text-2xl text-black font-bold leading-none mt-8 w-full csb:mt-0`} >ABOUT ME</div>
          <PortableText value={blurb} components={blockComponents} />
        </div>
      </div>
    </>
  )
}