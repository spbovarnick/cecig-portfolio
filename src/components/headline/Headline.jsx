'use client'
import { AutoTextSize } from "auto-text-size";
import './headline.css';
import { bricolageGrotesque } from "@/app/fonts";

export default function Headline({ text }) { 

  return (
    <div className="w-full m-0 flex justify-center">
      <AutoTextSize
        minFontSizePx={50}
        maxFontSizePx={300}
        mode="oneline"
        className={`${bricolageGrotesque.className} m-0 text-center font-extrabold leading-none`}
        id="headline"
      >{text}</AutoTextSize>
    </div>
  )
}