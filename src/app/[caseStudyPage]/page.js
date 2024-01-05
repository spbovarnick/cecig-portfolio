import { sanityFetch } from "@/utils/api/sanityFetch"
import { sanityClient } from "@/utils/sanity/lib/client"
import HeroHeader from "@/components/caseStudy/HeroHeader"
import ProblemPrinciples from "@/components/caseStudy/ProblemPrinciples"
import Scope from "@/components/caseStudy/Scope"
import CaseStudyBody from "@/components/caseStudy/body/CaseStudyBody"

export async function generateStaticParams() {
  try {
    const query = `*[_type == "case_study"]{
      'caseStudyPage': slug.current,
    }`
    const slugs = await sanityClient.fetch(query)
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
    banner_image{
      alt,
      asset -> {
      ...,
      metadata
    }},
    'slug': slug.current,
    timeline,
    "skills": skills[]->skillName,
    team[]{
      "type": team_member->member_type,
      count
    },
    problem_principles{
      problem,
      principles,
      pp_image{
        alt,
        asset -> {
          ...,
          metadata,
        }
      }
    },
    "deliverables": scope[]->deliverable_name,
    body[]{
      full_bleed,
      full_bleed_row[]{
        _type,
        ...,
        _type == 'full_bleed_img' => {
          ...,
          alt,
          asset->{
            _id,
            ...
          }
        },
        _type == "scope_step" => {
          ...,
          deliverable->
        },
      },
      left_col[]{
          ...,
          _type == 'left_col_img' => {
          ...,
          alt,
          asset->{
            _id,
            ...
          }
        },
        _type == "scope_step" => {
          ...,
          "name": deliverable->deliverable_name
        },
      },
      right_col[]{
        ...,
        _type == 'right_col_img' => {
          ...,
          alt,
          asset->{
              _id,
              ...
          }
        },
        _type == "scope_step" => {
          ...,
          deliverable->
        },
      },
    }
  }`

  const caseStudy = await sanityFetch({query: query, qParams: {slug: caseStudyPage} })
  

  return (
    <div>
      { caseStudy && 
        <HeroHeader caseStudy={caseStudy} />
      }
      { caseStudy.problem_principles && 
        <ProblemPrinciples problemPrinciples={caseStudy.problem_principles} />
      }
      { caseStudy.deliverables &&
        <Scope deliverables={caseStudy.deliverables} />
      }
      { caseStudy.slug &&
        <CaseStudyBody body={caseStudy.body} />
        }
    </div>
  )
}