// import { sanityFetch } from "@/utils/api/sanityFetch"
import ClientImg from "@/components/ClientImg"
import { PortableText } from "@portabletext/react"
import { bricolageGrotesque } from "@/app/fonts"
import './caseStudyBody.css'

const blockComponents = {
  types: {
    full_bleed_img: ({ value }) => <ClientImg fullHeight={true} objectFill={true} img={value} />,
    left_col_img: ({ value }) => <ClientImg fullHeight={true} objectFill={true} img={value} />,
    right_col_img: ({ value }) => <ClientImg fullHeight={true} objectFill={true} img={value} />,
    scope_step: ({ value }) => {
      return (
        <div className="flex items-center h-fit w-fit">
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
    normal: ({ children }) => <p className="font-semibold">{children}</p>
  }
}

export default function CaseStudyBody({body}) {

  return (
    <section className="grid grid-cols-1 bg-white px-6 py-16">
      { body?.map((row, index) => 
        row.full_bleed ? (
          <div key={index } className="grid grid-cols-1 ">
            <PortableText value={row.full_bleed_row} components={blockComponents} />
          </div>
        ) : (
          <div key={index}>
            <PortableText value={row.left_col} components={blockComponents} />
            <PortableText value={row.right_col} components={blockComponents} />
          </div>
        )
      )}
    </section>
  )
}