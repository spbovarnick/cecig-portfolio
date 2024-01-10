import ClientImg from "../ClientImg"
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
  block: {
    normal: ({ children }) => <p className="font-semibold">{children}</p>,
    h3: ({ children }) => <h3 className={`${bricolageGrotesque.className} text-[32px] text-black font-bold mb-6`}>{children}</h3>,
  },
}

export default function ProblemPrinciples({ problemPrinciples }) {

  return (
    <section className="lg:grid lg:grid-cols-2 bg-white lg:h-718">
      <div className="w-full h-full">
        <ClientImg 
          classes={"w-full h-full object-cover"}
          sizes={"(max-width: 1024px) 100vw, 50vw"}
          img={problemPrinciples.pp_image} 
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="w-1/2 py-16">
          <PortableText value={problemPrinciples.problem} components={blockComponents} />
        </div>
      </div>
    </section>
  )
}