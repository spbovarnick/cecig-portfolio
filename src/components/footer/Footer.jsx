import { bricolageGrotesque } from "@/app/fonts";
import './footer.css';

export default function Footer(){

  return (
    <div id="footer" className="box-border flex flex-col md:flex-row w-full md:justify-between md:items-center absolute bottom-0 bg-[#CECECE] p-6 md:p-0 md:h-[119px] leading-none text-2xl">
      <div id="CTAnect" className={`${bricolageGrotesque.className} font-bold text-[32px] mb-6 md:absolute md:mb-0 md:left-[38px]`}>
        Let&#39;s Connect! ✌️
      </div>
      <div className="hidden md:flex absolute left-2/4 -translate-x-2/4 gap-x-[21px]">
        <a className="footer-link" href="mailto:iamcecig@gmail.com">Email Me</a>
        <a className="footer-link" href="https://www.linkedin.com/in/cecigomez/" target="_blank" >LinkedIn</a>
      </div>
      <a className="footer-link hidden md:block absolute right-[38px]" href="https://drive.google.com/file/d/1-biRtZhRiDH_mlYPKBiA0DS3HMQdN82W/view?ts=65909c5c&pli=1" target="_blank">Resume</a>
      <div className="flex flex-col md:hidden">
        <a className="mb-4 footer-link" href="mailto:iamcecig@gmail.com">Email Me</a>
        <a className="mb-4 footer-link" href="https://www.linkedin.com/in/cecigomez/" target="_blank" >LinkedIn</a>
        <a className="footer-link" href="https://drive.google.com/file/d/1-biRtZhRiDH_mlYPKBiA0DS3HMQdN82W/view?ts=65909c5c&pli=1" target="_blank">Resume</a>
      </div>
    </div>
  )
}