import { inter } from "@/app/fonts"
import './writing-ui.css'

export default function WritingUI({ link, title, host, pub }) {
  return (
    <div id="writing-cel" className="border-b border-black w-full h-content leading-none relative">
      <div id="slide-cel" className="absolute top-0 w-full h-full"></div>
      <a
        id="link-cel"
        href={link}
        target="_blank"
        className=" w-full h-full flex justify-between items-center font-semibold px-10  py-16"
      >
        <div className="w-1/2 text-[20px] sm:text-[32px]">{title}</div>
        <div className={`${inter.className} w-1/2 text-right text-[20px] sm:text-[40px]`}>{pub}</div>
      </a>
    </div>
  )
}