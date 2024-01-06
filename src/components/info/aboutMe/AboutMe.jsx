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
        <div className="w-full h-auto lg:w-1/2 xl:w-2/5 lg:flex lg:justify-center lg:items-center">
          <ClientImg fullHeight={true} objectCover={true} img={headshot} />
        </div>
      }
      <div 
        id="info-blurb"
        className="w-full lg:w-1/2 xl:w-3/5 lg:flex lg:justify-center"
      >
        <div 
          className="lg:w-2/3 xl:w-2/3"
        >
          <div className={`${bricolageGrotesque.className} text-2xl text-black font-bold leading-none mt-8 w-full xl:mt-0`} >ABOUT ME</div>
          <PortableText value={blurb} components={blockComponents} />
        </div>
      </div>
    </>
  )
}