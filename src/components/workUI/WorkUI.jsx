import { inter } from "@/app/fonts"
import Link from "next/link"
import './work-ui.css'

export default function WorkUI({ slug, project, client }) {

  return (
    <div id="work-cel" className="border-b border-black w-full h-content leading-none">
      <Link 
        href={`/${slug}`} 
        className=" w-full h-full flex justify-between items-center pb-[44px] font-semibold pl-[26px] pr-[35px] pt-[84px] "
      >
        <div className="w-1/2 text-[20px] sm:text-[32px]">{project}</div>
        <div className={`${inter.className} w-1/2 text-right text-[20px] sm:text-[40px]`}>{client}</div>
      </Link>
    </div>
  )
}