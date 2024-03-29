import { inter } from "@/app/fonts"
import Link from "next/link"
import './work-ui.css'

export default function WorkUI({ slug, project, client, nda }) {
  
  return (
    <div id="work-cel" className="border-b border-black w-full h-content leading-none relative">
      <Link 
        href={`/${slug}`}
        id="link-cel"
        className="w-full h-full flex justify-between items-center font-semibold px-10 py-16 "
      >
        <div className="w-fit text-[20px] sm:text-[32px]">{project}</div>
        <div className={`${inter.className} ml-10 w-fit text-right text-[20px] sm:text-[40px]`}>{client}</div>
      </Link>
      <Link id="slide-cel" className="absolute top-0 w-full h-full" href={`/${slug}`}></Link>
    </div>
  )
}