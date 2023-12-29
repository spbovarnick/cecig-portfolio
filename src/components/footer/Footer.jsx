import { bricolageGrotesque } from "@/app/fonts"

export default function Footer(){

  return (
    <div id="footer" className="flex flex-col md:flex-row w-full md:justify-between md:items-center absolute bottom-0 bg-[#CECECE] p-6 leading-none">
      <div className={`${bricolageGrotesque.className} font-bold text-2xl mb-6 md:m-0`}>
        Let&#39;s Connect! ✌️
      </div>
      <div className="hidden md:block">
        <a className="pr-[22px]" href="mailto:iamcecig@gmail.com">Email Me</a>
        <a className="pl-[22px]" href="https://www.linkedin.com/in/cecigomez/" target="_blank" >LinkedIn</a>
      </div>
      <a className="hidden md:block" href="TKTKTK" target="_blank">Resume</a>
      <div className="flex flex-col md:hidden">
        <a className="mb-4" href="mailto:iamcecig@gmail.com">Email Me</a>
        <a className="mb-4" href="https://www.linkedin.com/in/cecigomez/" target="_blank" >LinkedIn</a>
        <a className="" href="TKTKTK" target="_blank">Resume</a>
      </div>
    </div>
  )
}