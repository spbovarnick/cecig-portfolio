import { sanityFetch } from "@/utils/api/sanityFetch"
import { sanityClient } from "@/utils/sanity/lib/client"
import HeroHeader from "@/components/caseStudy/HeroHeader"
import ProblemPrinciples from "@/components/caseStudy/ProblemPrinciples"
import Scope from "@/components/caseStudy/Scope"
import CaseStudyBody from "@/components/caseStudy/body/CaseStudyBody"
import { cookies } from 'next/headers'
import PwdPrompt from "@/components/auth/PwdPrompt"

export async function generateStaticParams() {
  try {
    const query = `*[_type == "case_study"]{
      'slug': slug.current,
      nda,
    }`
    const slugs = await sanityClient.fetch(query)
    return slugs.map(slug => ({
       slug: slug.slug
    }))
  } catch (error) {
    console.error("Error generating static params from Sanity:", error)
  }
}

export default async function casStudy({ params }){
  const cookiesStore = cookies();
  const accessCookies = cookiesStore.get(process.env.PASSWORD_COOKIE_NAME);
  const isAuthorized = !!accessCookies?.value
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
    role,
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
      _key,
      full_bleed,
      full_bleed_text_or_img,
      img_side,
      full_bleed_row_img{
        _type,
        alt,
        asset -> {
          ...,
          metadata
        }
      },
      full_bleed_text[]{
        _type,
        ...,
        _type == "scope_step" => {
          ...,
          "name": deliverable->deliverable_name
        },
      },
      left_col_img{
        alt,
        asset -> {
          ...,
          metadata
        }
      },
      right_col_img{
        alt,
        asset -> {
          ...,
          metadata
        }
      },
      left_col_text[]{
        _type,
        ...,
        _type == "scope_step" => {
          ...,
          "name": deliverable->deliverable_name
        },
      },
      right_col_text[]{
        _type,
        ...,
        _type == "scope_step" => {
          ...,
          "name": deliverable->deliverable_name
        },
      },
    }
  }`
  

  const caseStudy = await sanityFetch({query: query, qParams: {slug: caseStudyPage} })
  if (!isAuthorized && caseStudy?.nda) {
    return <PwdPrompt slug={caseStudy.slug} />
  }
  return (
    <div>
      { caseStudy && 
        <HeroHeader caseStudy={caseStudy} />
      }
      { caseStudy?.problem_principles && 
        <ProblemPrinciples problemPrinciples={caseStudy.problem_principles} />
      }
      { caseStudy?.deliverables &&
        <Scope deliverables={caseStudy.deliverables} />
      }
      { caseStudy?.slug &&
        <CaseStudyBody body={caseStudy.body} />
        }
    </div>
  )
}