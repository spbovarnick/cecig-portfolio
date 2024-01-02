import { bricolageGrotesque } from "@/app/fonts"
export default function Scope({ deliverables }) {

  return (
    <section className="bg-[#E9E4E0] px-6 py-16">
      <p className={`${bricolageGrotesque.className} text-[32px] text-black font-bold mb-6`}>SCOPE OF WORK</p>
      { deliverables.map((deliverable, i ) => (
        <div key={i}>
          <div className="flex items-center">
            <div className={`${bricolageGrotesque.className} text-5xl text-black font-bold`}>{i+1}</div>
            <div>{deliverable}</div>
          </div>
        </div>
      )) }

    </section>
  )
}