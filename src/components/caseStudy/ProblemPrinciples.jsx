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
    normal: ({ children }) => <p>{children}</p>,
    h3: ({ children }) => <h3 className={`${bricolageGrotesque.className} text-[32px] text-black font-bold mb-6`}>{children}</h3>,
  },
}

export default function ProblemPrinciples({ problemPrinciples }) {

  return (
    <section className="bg-white csb:flex csb:justify-center">
      <div className="csb:grid csb:grid-cols-2 csb:h-720 csb:max-w-[1280px]">
        <div className="w-full h-full">
          <ClientImg 
            classes={"w-full h-full object-contain"}
            sizes={"(max-width: 1024px) 100vw, 50vw"}
            img={problemPrinciples.pp_image} 
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="px-6 py-16 csb:px-24">
            <PortableText value={problemPrinciples.problem} components={blockComponents} />
          </div>
        </div>
      </div>
    </section>
  )
}