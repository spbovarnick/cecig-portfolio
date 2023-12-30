import Image from "next/image"
import { bricolageGrotesque } from "@/app/fonts"

export default function HeroHeader({caseStudy}) {
  const { _id, project, client, year, img_url, slug, nda } = caseStudy
  
  const heroClasses = `${bricolageGrotesque.className} text-2xl text-[#9A9A9A] font-bold`

  return (
    <div className="relative h-fit ">
      <div className="relative top-0 right-0 w-screen h-fit md:w-2/5 bg-black bg-opacity-50">
        <Image 
          src={img_url}
          alt="Casestudy banner image"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
        />
        { nda &&
          <Image 
            src={'/sh_ sticker.png'}
            alt="Hush sticker"
            width={169}
            height={169}
            className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 md:translate-x-0 md:translate-y-0 md:right-10 md:top-[55px] md:left-auto"
          />
        }
      </div>
      <div className="grid grid-cols-1 gap-y-8 px-6 pt-8 pb-20">
        <div>
          <p className={heroClasses}>PROJECT</p>
        </div>
        <div>
          <p className={heroClasses}>CLIENT</p>
        </div>
        <div>
          <p className={heroClasses}>TIMELINE</p>
        </div>
        <div>
          <p className={heroClasses}>SKILLS</p>
        </div>
        <div>
          <p className={heroClasses}>TEAM</p>
        </div>
      </div>
    </div>
  )
}