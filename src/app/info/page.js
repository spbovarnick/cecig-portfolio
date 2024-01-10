import { sanityFetch } from "@/utils/api/sanityFetch"
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

  console.log(info)

  return (
    <section className="px-6 pt-4 lg:px-10 grid grid-cols-1 gap-16 lg:gap-24">
      <section 
        id="about-section"
        className="flex flex-col lg:flex-row"
      >
      
        { info.about_blurb && 
          <AboutMe blurb={info.about_blurb} headshot={info.headshot} />
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
      <section 
        id="into-section"
        className="mb-16 lg:mb-24"
      >
        { info.into_gif && 
          <Into gif={info.into_gif} />
        }
      </section>
    </section>
  )
}