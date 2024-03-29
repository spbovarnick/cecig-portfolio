import { bricolageGrotesque } from "@/app/fonts"

export default function Experience({experiences, skills, education}) {
  const headerClasses = `${bricolageGrotesque.className} text-2xl text-[#9A9A9A] font-bold leading-none w-full`

  return (
    // <div className="grid grid-cols-1 gap-y-16 lg:flex lg:grid-cols-none lg:w-full lg:justify-between">
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-16 lg:justify-items-center">
      { experiences &&
        <section 
          id="experience"
          className="w-fit"
        >
          <div 
            className={headerClasses}
          >RECENT EXPERIENCE</div>
          { experiences.map((gig, index) => (
            <div key={gig._key} className="text-base mt-4">
              <div 
                className="font-bold"
              >
                {gig.role} @ {gig.employer} {gig.contract && '(contract)'}
              </div>
              <div
                className="font-normal"
              >
                {gig.start_date}-{ gig.still_working ? 'present' : gig.end_date}
              </div>
            </div>
          ))}
        </section>
      }
      { skills && 
        <section 
          id="skills"
          className="w-fit"
        >
          <div className={headerClasses}>SKILLS</div>
            <div className="mt-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="text-base font-normal"
                >{skill}</div>
              ))}
            </div>
        </section>
      } 
      { education && 
        <section 
          id="education"
          className="w-fit"
        >
          <div className={headerClasses}>EDUCATION</div>
          {education.map((mat, index) => (
            <div key={index} className="text-base mt-4">
              <div className="font-bold">{mat.degree}</div>
              { mat.currently_enrolled ? 
                <div className="font-semibold">Currently enrolled</div> :
                <div className="font-normal">{mat.school} {mat.start_year ? `${mat.start_year}-${mat.end_year}` : mat.end_year}</div>
              }
              { mat.foci && 
                mat.foci.map((focus, index) => (
                  <div key={index}>{focus}</div>
                ))
              }
            </div>
          ))}
        </section>
      }
    </div>
  )
}