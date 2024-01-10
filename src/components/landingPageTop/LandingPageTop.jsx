import { bricolageGrotesque } from "@/app/fonts"
import Headline from "./headline/Headline";
import { PortableText } from "@portabletext/react";
import Spliner from "./Spliner";
import { sanityFetch } from "@/utils/api/sanityFetch";

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
    },
    bold: ({ children }) => <span className={`${bricolageGrotesque.className} font-extrabold md:text-5xl`}>{children}</span>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    number: ({ children }) => <ol className="list-inside list-decimal">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="text-md">{children}</li>
  },
  block: {
    normal: ({ children }) => <p className="text-2xl md:text-4xl font-semibold ">{children}</p>,
    h3: ({ children }) => <h3 className="font-bold text-[32px] mb-6">{children}</h3>,
  }
}

export default async function LandingPageTop({  }) {
  const query = `*[_type == 'landing_blurb'][0]{"landingBlurb": blurb}`
  let landingBlurb;
  try {
    const data = await sanityFetch({ query: query, qParams: {} });
    // console.log(data)
    ({landingBlurb}  = data);
  } catch (error) {
    console.log("Error fetching landing page blurb data from Sanity:", error)
    return null
  }
  console.log(landingBlurb)

  return (
    <section className="h-fit min-h-screen relative">
      <Spliner />
      <Headline text="CECI GOMEZ" />
      <div className='px-[22px] pt-[4.5rem] md:pt-40 md:px-10 md:w-3/4 relative flex' style={{ pointerEvents: 'none'}}>
        { landingBlurb &&
          <PortableText value={landingBlurb} components={blockComponents} />
        }
      </div>
    </section>
  )
}