import { sanityFetch } from "@/utils/api/sanityFetch"
import WorkUI from "@/components/workUI/WorkUI"
import WritingUI from "@/components/writingUI/WritingUI"
import LandingPageTop from "@/components/landingPageTop/LandingPageTop"




export default async function Home() {
  const query = `*[_type in ['case_study', 'writing']][0]{
    "workData": *[_type == 'case_study'] {
      _id,
      nda,
      project,
      client,
      'slug': slug.current,    
    },
    "writingData": *[_type == 'writing']{
      _id,
      publication,
      title,
      link,
    }
  }`
  let workData, writingData;
  try {
    const data = await sanityFetch({ query: query, qParams: {} });
    ({ workData, writingData } = data);
  } catch (error) {
    console.log("Error fetching landing page data from Sanity:", error)
    return null
  }
  
  return (
    <div className="max-w-screen">
      <LandingPageTop />
      <section id="work" className="relative border-t-2 border-black h-min mb-[183px] scroll-mt-20 md:mt-28 md:scroll-mt-32">
        <div id="work-title" className="absolute top-0 left-[4rem] md:left-[5.5rem] -translate-y-2/4 text-xl font-extrabold tracking-widest px-4">WORK</div>
        {  workData?.map((caseStudy) => (
          <WorkUI 
            key={caseStudy._id} 
            slug={caseStudy.slug} 
            project={caseStudy.project}
            client={caseStudy.client}
            nda={caseStudy.nda}
          />
        ))}
      </section>
      <section id="writing" className="relative border-t-2 border-black h-min">
        <div id="writing-title" className="absolute top-0 left-[4rem] md:left-[5.5rem] -translate-y-2/4 text-xl font-extrabold tracking-widest px-4">WRITING</div>
        {  writingData?.map((writing) => (
          <WritingUI 
            key={writing._id}
            title={writing.title}
            link={writing.link}
            pub={writing.publication}
          />
        ))}
      </section>
    </div>
  )
}
