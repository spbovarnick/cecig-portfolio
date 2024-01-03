import { PortableText } from "@portabletext/react"
import './aboutMe.css'

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

export default function AboutMe({ blurb }) {

  console.log(blurb)

  return (
    <div id="info-blurb">
      <PortableText value={blurb} components={blockComponents} />
    </div>
  )
}