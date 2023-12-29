import Headline from "@/components/headline/Headline"
import { bricolageGrotesque } from "./fonts"

export default function Home() {

  return (
    <div className="max-w-screen">
      <section className="h-screen">
        <Headline text="CECI GOMEZ" />
        <div className='px-[22px] pt-[4.5rem] md:pt-40 md:px-10 md:w-3/4'>
          <p
            className="text-2xl md:text-4xl font-semibold"
          >
            I&aposm an interaction design fellow at IDEO shaping product experiences across various industries with a focus on emerging technology. I&aposve got a knack for creating something from nothing while forging new creative pathways. As a 
            <b 
              className={`${bricolageGrotesque.className} font-extrabold md:text-5xl`}
            > human centered designer</b>
            , I&aposve helped small start ups design big ideas and big companies continuously champion end users. </p>
        </div>
      </section>
      <section id="work" className="relative border-t-2 border-black h-screen">
        <div id="work-title" className="absolute top-0 left-[5rem] md:left-[6.5rem] -translate-y-2/4 text-xl font-extrabold tracking-wide">WORK</div>
      </section>
      <section id="writing" className="relative border-t-2 border-black h-screen">
        <div id="writing-title" className="absolute top-0 left-[5rem] md:left-[6.5rem] -translate-y-2/4 text-xl font-extrabold tracking-wide">WRITING</div>
      </section>
    </div>
  )
}
