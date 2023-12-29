import { client } from "@/utils/sanity/lib/client"

export async function generateStaticParams() {
  try {
    const query = `*[_type == "case_study"] {
      'slug': slug.current,
    }`
    const slugs = await client.fetch(query)
    return slugs.map(slug => ({
      params: { slug: slug.slug }
    }))
  } catch (error) {
    console.error("Error generating static params from Sanity:", error)
  }
}

export default function casStudy({ params }){
  const { slug } = params
  return (
    <div>
      caseStudy
    </div>
  )
}