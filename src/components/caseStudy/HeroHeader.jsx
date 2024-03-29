import { bricolageGrotesque } from "@/app/fonts"
import ClientImg from "../ClientImg"

export default function HeroHeader({caseStudy}) {
  const { _id, project, client, year, nda, timeline, skills, team, banner_image, role } = caseStudy
  
  
  const heroHeaderClasses = `${bricolageGrotesque.className} text-2xl text-[#9A9A9A] font-bold`
  const heroContentClasess = `text-xl font-bold`

  return (
    <div className="relative flex flex-col lg:grid lg:grid-cols-2">
      <div className="relative w-full lg:order-last">
        <ClientImg 
          sizes={"(max-width: 1536px) 100vw, 50vw"}
          classes={"w-full h-auto csb:h-full object-contain csb:object-cover"} 
          img={banner_image} 
        />
      </div>
      <div className="grid grid-cols-1 gap-y-8 px-6 pt-8 pb-20 lg:grid-cols-2 lg:gap-x-8">
        <div >
          <p className={heroHeaderClasses}>PROJECT</p>
          <p className={heroContentClasess} >{project}</p>
        </div>
        <div>
          <p className={heroHeaderClasses}>CLIENT</p>
          <p className={heroContentClasess}>
            {nda ? `${client} - This one has limited shareable information` : client}
          </p>
        </div>
        <div>
          <p className={heroHeaderClasses}>TIMELINE</p>
          <p className={heroContentClasess}>{timeline}</p>
        </div>
        <div>
          <p className={heroHeaderClasses}>YEAR</p>
          <p className={heroContentClasess}>{year}</p>
        </div>
        <div>
          <p className={heroHeaderClasses}>SKILLS</p>
          <ul className={heroContentClasess}>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        { team?.length > 0 &&
          <div>
            <p className={heroHeaderClasses}>TEAM</p>
            <ul className={heroContentClasess}>
              {team.map((member, index) => (
                <li key={index}>{member.count} {member.type}{member.count > 1 ? 's' : ''}</li>
              ))}
            </ul>
          </div>
        }
        <div>
          <p className={heroHeaderClasses}>ROLE</p>
          <p className={heroContentClasess}>{role}</p>
        </div>
      </div>
    </div>
  )
}