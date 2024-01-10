// import { sanityFetch } from "@/utils/api/sanityFetch"
import { bricolageGrotesque } from "@/app/fonts"
import './caseStudyBody.css'
import FullBleedRow from "./FullBleedRow"
import TwoColRow from "./TwoColRow"

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
    normal: ({ children }) => <p className="font-semibold mb-6">{children}</p>,
    h1: ({ children }) => <h1 className="font-bold text-5xl">{children}</h1>,
    h2: ({ children }) => <h1 className="font-bold text-[32px]">{children}</h1>,
    h3: ({ children }) => <h3 className="font-bold text-[32px] mb-6">{children}</h3>,
  }
}

export default function CaseStudyBody({body}) {
  
  return (
    <section id="csb" className="grid grid-cols-1 bg-white">
      { body?.map((row, index) => 
        row.full_bleed ? (
          <FullBleedRow
            key={row._key} 
            blockComponents={blockComponents} 
            img={row.full_bleed_row_img} 
            text={row.full_bleed_text} 
            textOrImg={row.full_bleed_text_or_img} 
          />
        ) : (
          <TwoColRow key={row._key} row={row} blockComponents={blockComponents} />
        )
      )}
    </section>
  )
}