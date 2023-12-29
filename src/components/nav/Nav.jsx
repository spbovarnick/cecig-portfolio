import Link from "next/link"
import { bricolageGrotesque } from "@/app/fonts"
import './nav.css'
import Image from "next/image"

export default function Nav() {
  return (
    <div id="nav" className="flex w-full justify-center items-center sticky top-0">
      <Image className="absolute left-10 hidden md:block" src="/cg-favicon.svg" width={64} height={64} alt="CG logo"/>
      <div className={`${bricolageGrotesque.className} font-bold text-xl md:text-2xl flex gap-x-[21px] md:gap-x-[42px] py-5 md:py-10`}>
        <a className="z-50" href="#work">WORK</a>
        <Link href={'/link'}>INFO</Link>
      </div>
    </div>
  )
}