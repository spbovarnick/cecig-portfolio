"use client";
import { bricolageGrotesque } from "@/app/fonts"
import Spline from "@splinetool/react-spline"
import Headline from "../headline/Headline";
import React, { Suspense } from "react";

export default function LandingPageTop() {

  return (
    <section className="h-fit min-h-screen relative">
      <Suspense >
        {/* <Spline scene="https://prod.spline.design/4p9nsZC5GazESSjd/scene.splinecode" className="absolute top-0 " /> */}
        <Spline scene="https://prod.spline.design/RbKuDtJPoSHyiAfj/scene.splinecode" className="absolute top-0 " />
      </Suspense>
      <Headline text="CECI GOMEZ" />
      <div className='px-[22px] pt-[4.5rem] md:pt-40 md:px-10 md:w-3/4 relative flex' style={{ pointerEvents: 'none'}}>
        <p
          className="text-2xl md:text-4xl font-semibold"
        >
          I&#39;m an interaction design fellow at IDEO shaping product experiences across various industries with a focus on emerging technology. I&#39;ve got a knack for creating something from nothing while forging new creative pathways. As a
          <b
            className={`${bricolageGrotesque.className} font-extrabold md:text-5xl`}
          > human centered designer</b>
          , I&#39;ve helped small start ups design big ideas and big companies continuously champion end users. </p>
      </div>
    </section>
  )
}