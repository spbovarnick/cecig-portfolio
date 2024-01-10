import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"
import './aboutMe.css'
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
  normal: ({ children }) => <p className="info-page-text">{children}</p>
}

export default function AboutMe({ blurb, headshot }) {

  return (
    <>
      {headshot &&
        <div className="w-full h-full ">
          <ClientImg 
            classes={"w-full h-auto csb:h-full csb:w-auto object-contain md:max-[1089px]:object-cover"}
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            img={headshot} 
          />
        </div>
      }
      <div 
        id="info-blurb"
        className="px-6 csb:px-16 csb:flex csb:items-center"
      >
        <div 
          className="w-full h-fit"
        >
          <div className={`${bricolageGrotesque.className} text-2xl text-black font-bold leading-none mt-8 w-full xl:mt-0`} >ABOUT ME</div>
          <PortableText value={blurb} components={blockComponents} />
        </div>
      </div>
    </>
  )
}