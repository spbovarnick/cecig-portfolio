import { bricolageGrotesque } from "../fonts"
import { sanityFetch } from "@/utils/api/sanityFetch"
import ClientImg from "@/components/ClientImg"
import AboutMe from "@/components/info/aboutMe/AboutMe"
import Experience from "@/components/info/expSkillEd/Experience"
import Into from "@/components/info/imInto/Into"

export default async function Info(){
  const query = `*[_type == "info"][0]{
    ...,
    headshot{
      alt,
      asset -> {
      ...,
      metadata
    }},
    "skills": skills[]->skillName,
    into_gif{
      alt,
      asset -> {
        ...,
        metadata
      }
    }
  }`
  const info = await sanityFetch({query: query, qParams: {}})

  return (
    <section className="px-6 pt-4 lg:px-10 grid grid-cols-1 gap-16">
      <section 
        id="about-section"
        className="flex flex-col lg:flex-row"
      >
        { info.headshot &&
          <div className="w-full h-auto lg:w-2/5 lg:flex lg:justify-center lg:items-center">
            <ClientImg img={info.headshot} />
          </div>
        }
        { info.about_blurb && 
          <AboutMe blurb={info.about_blurb} />
        }
      </section>
      <section
        id="exp-skill-ed-section"
        className="w-full"
      >
        { info.experience && 
          <Experience 
            experiences={info.experience} 
            skills={info.skills} 
            education={info.education} 
          />
        }
      </section>
      <section id="into-section">
        { info.into_gif && 
          <Into gif={info.into_gif} />
        }
      </section>
    </section>
  )
}