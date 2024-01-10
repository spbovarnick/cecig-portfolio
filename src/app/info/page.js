import { sanityFetch } from "@/utils/api/sanityFetch"
import AboutMe from "@/components/info/aboutMe/AboutMe"
import Experience from "@/components/info/expSkillEd/Experience"
import Into from "@/components/info/imInto/Into"

export default async function Info(){
  const query = `*[_type == "info"][0]{
    ...,
    headshot{
      alt,
      crop,
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
    <section className="grid grid-cols-1 gap-16">
      <div className="csb:flex csb:justify-center">
        <section 
          id="about-section"
          className="flex flex-col csb:grid csb:grid-cols-2 csb:h-720 csb:max-w-[1280px]"
        >
        
          { info?.about_blurb && 
            <AboutMe blurb={info.about_blurb} headshot={info.headshot} />
          }
        </section>
      </div>
      <section
        id="exp-skill-ed-section"
        className="w-full px-6 "
      >
        { info?.experience && 
          <Experience 
            experiences={info.experience} 
            skills={info.skills} 
            education={info.education} 
          />
        }
      </section>
      <section 
        id="into-section"
        className="mb-16 "
      >
        { info?.into_gif && 
          <Into gif={info.into_gif} />
        }
      </section>
    </section>
  )
}