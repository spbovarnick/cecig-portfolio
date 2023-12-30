import { sanityFetch } from "@/utils/api/sanityFetch"
import { client } from "@/utils/sanity/lib/client"
import HeroHeader from "@/components/caseStudy/HeroHeader"

export async function generateStaticParams() {
  try {
    const query = `*[_type == "case_study"]{
      'caseStudyPage': slug.current,
    }`
    const slugs = await client.fetch(query)
    return slugs.map(slug => ({
      params: { slug: slug.slug }
    }))
  } catch (error) {
    console.error("Error generating static params from Sanity:", error)
  }
}

export default async function casStudy({ params }){
  const { caseStudyPage } = params
  
  const query = `*[_type == "case_study" && slug.current == $slug][0]{
    _id,
    project,
    client,
    year,
    nda,
    'img_url': banner_image.asset -> url,
    'slug': slug.current,
  }`

  const caseStudy = await sanityFetch({query: query, qParams: {slug: caseStudyPage} })
  


  return (
    <div>
      { caseStudy && 
        <HeroHeader caseStudy={caseStudy} />
      }
    </div>
  )
}