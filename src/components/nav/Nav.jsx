import Link from "next/link"
import { bricolageGrotesque } from "@/app/fonts"
import './nav.css'


export default function Nav() {

  return (
    <div id="nav" className="box-border w-full h-[109px] sticky top-0 z-50">
      <Link 
        className="absolute left-10 top-[22px] hidden md:block" 
        href='/'
      >
        <svg width="64" id='nav-logo' height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 2.79753e-06C46.3269 2.02501e-06 32 14.3269 32 32C32 49.6731 46.3269 64 64 64V53.3333C52.2179 53.3333 42.6667 43.7821 42.6667 32C42.6667 20.2179 52.2179 10.6667 64 10.6667V2.79753e-06Z" fill="black" />
          <path d="M53.3333 32C53.3333 26.109 58.109 21.3333 64 21.3333V42.6667C58.109 42.6667 53.3333 37.891 53.3333 32Z" fill="black" />
          <path d="M32 32C32 14.3269 17.6731 7.72516e-07 9.11296e-06 0L8.6467e-06 10.6667C11.7821 10.6667 21.3333 20.2179 21.3333 32C21.3333 43.7821 11.7821 53.3333 0 53.3333L6.31543e-06 64C17.6731 64 32 49.6731 32 32Z" fill="black" />
          <path d="M10.6667 32C10.6667 26.109 5.89105 21.3333 8.18045e-06 21.3333L7.24794e-06 42.6667C5.89105 42.6667 10.6667 37.891 10.6667 32Z" fill="black" />
          <rect x="53.3335" y="31.1111" width="10.6667" height="31.1111" fill="black" />
        </svg>

      </Link>
      <div id="nav-links" className={`${bricolageGrotesque.className} absolute font-bold text-xl md:text-2xl flex gap-x-[21px] md:gap-x-[42px] pt-[59px] pb-[31px] md:py-10 -translate-x-2/4 left-2/4`}>
        <Link 
          className="nav-link z-50 " 
          href="/#work"
        >WORK</Link>
        <Link 
          href={'/info'}
          className="nav-link z-50" 
        >INFO</Link>
      </div>
    </div>
  )
}

// hover:border-b-2 border-[#EB56E8] ease-in duration-300