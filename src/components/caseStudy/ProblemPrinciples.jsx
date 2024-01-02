import ClientImg from "./ClientImg"
import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"

const blockComponents = {
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
  normal: ({ children }) => <p className="font-semibold">{children}</p>
}

export default function ProblemPrinciples({ problemPrinciples }) {

  const headerClasses = `${bricolageGrotesque.className} text-[32px] text-black font-bold mb-6`

  return (
    <div className="lg:flex lg:items-center bg-white px-6 py-16">
      <div className="lg:w-2/5 lg:flex lg:flex-col">
        <div id="problem" className="order-1 mb-5 lg:mb-[72px]">
          <p className={headerClasses}>THE PROBLEM</p>
          <PortableText value={problemPrinciples.problem} components={blockComponents} />
        </div>
        <div className="order-3 lg:hidden mb-5">
          <ClientImg img={problemPrinciples.pp_image} />
        </div>
        <div id="principles" className="order-2">
          <p className={headerClasses}>PRINCIPLES</p>
          <PortableText value={problemPrinciples.principles} components={blockComponents} />
        </div>
      </div>
      <div className="hidden lg:block lg:w-3/5 lg:h-full lg:order-1 lg:flex lg:justify-center lg:items-center">
        <div className="w-2/3">
          <ClientImg img={problemPrinciples.pp_image} />
        </div>
      </div>
    </div>
  )
}