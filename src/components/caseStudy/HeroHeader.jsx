
"use client"

import Image from "next/image"
import { sanityClient } from "@/utils/sanity/lib/client"
import { useNextSanityImage } from "next-sanity-image"
import { bricolageGrotesque } from "@/app/fonts"

export default function HeroHeader({caseStudy}) {
  const { _id, project, client, year, img_url, slug, nda, timeline, skills, team, banner_image } = caseStudy
  const impageProps = useNextSanityImage(sanityClient, banner_image)
  
  const heroHeaderClasses = `${bricolageGrotesque.className} text-2xl text-[#9A9A9A] font-bold`
  const heroContentClasess = `text-xl font-bold`

  return (
    <div className="relative h-fit lg:flex flex-row-reverse ">
      <div className="relative w-screen h-fit lg:w-2/5 bg-black bg-opacity-50 lg:h-full w-fit">
        <Image 
          {...impageProps}
          alt="Casestudy banner image"
          width={500}
          height={500}
          placeholder="blur"
          blurDataURL={banner_image.asset.metadata.lqip}
          className="w-full h-auto object-contain"
        />
        { nda &&
          <Image 
            src={'/sh_ sticker.png'}
            alt="Hush sticker"
            width={169}
            height={169}
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 lg:translate-x-0 lg:translate-y-0 lg:right-10 lg:top-[55px] lg:left-auto"
          />
        }
      </div>
      <div className="grid grid-cols-1 gap-y-8 px-6 pt-8 pb-20 lg:grid-cols-2">
        <div >
          <p className={heroHeaderClasses}>PROJECT</p>
          <p className={heroContentClasess} >{project}</p>
        </div>
        <div>
          <p className={heroHeaderClasses}>CLIENT</p>
          <p className={heroContentClasess}>
            {nda ? `${client} - This one is under NDA, so has limited shareable information` : client}
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
        { team.length > 0 &&
          <div>
            <p className={heroHeaderClasses}>TEAM</p>
            <ul className={heroContentClasess}>
              {team.map((member, index) => (
                <li key={index}>{member.count} {member.type}{member.count > 1 ? 's' : ''}</li>
              ))}
            </ul>
          </div>
        }
      </div>
    </div>
  )
}