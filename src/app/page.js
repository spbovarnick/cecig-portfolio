import { sanityFetch } from "@/utils/api/sanityFetch"
import Headline from "@/components/headline/Headline"
import { bricolageGrotesque } from "./fonts"
import WorkUI from "@/components/workUI/WorkUI"



export default async function Home() {
  const query = `*[_type == 'case_study']{
    _id,
    project,
    client,
    'slug': slug.current,
  }`
  let landingData;
  try {
    landingData = await sanityFetch({ query: query, qParams: {} });
  } catch (error) {
    console.log("Error fetching landing page data from Sanity:", error)
    return null
  }

  return (
    <div className="max-w-screen">
      <section className="h-fit min-h-screen ">
        <Headline text="CECI GOMEZ" />
        <div className='px-[22px] pt-[4.5rem] md:pt-40 md:px-10 md:w-3/4'>
          <p
            className="text-2xl md:text-4xl font-semibold"
          >
            I&#39;m an interaction design fellow at IDEO shaping product experiences across various industries with a focus on emerging technology. I&#39;ve got a knack for creating something from nothing while forging new creative pathways. As a 
            <b 
              className={`${bricolageGrotesque.className} font-extrabold md:text-5xl`}
            > human centered designer</b>
            , I&#39;ve helped small start ups design big ideas and big companies continuously champion end users. </p>
        </div>
      </section>
      <section id="work" className="relative border-t-2 border-black h-screen mt-[68px] scroll-mt-20 md:mt-28 md:scroll-mt-32">
        <div id="work-title" className="absolute top-0 left-[4rem] md:left-[5.5rem] -translate-y-2/4 text-xl font-extrabold tracking-widest px-4">WORK</div>
        { landingData.map((caseStudy) => (
          <WorkUI 
            key={caseStudy._id} 
            slug={caseStudy.slug} 
            project={caseStudy.project}
            client={caseStudy.client}
          />
        ))}
      </section>
      <section id="writing" className="relative border-t-2 border-black h-screen">
        <div id="writing-title" className="absolute top-0 left-[4rem] md:left-[5.5rem] -translate-y-2/4 text-xl font-extrabold tracking-widest px-4">WRITING</div>
      </section>
    </div>
  )
}
