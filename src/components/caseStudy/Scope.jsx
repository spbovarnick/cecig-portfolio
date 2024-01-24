import { bricolageGrotesque } from "@/app/fonts"
export default function Scope({ deliverables }) {

  return (
    <section className="bg-[#E9E4E0] px-6 py-16">
      <p id="scope-title" className={`${bricolageGrotesque.className} text-[32px] text-black font-bold mb-6`}>SCOPE OF WORK</p>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-none lg:flex">
        { deliverables.map((deliverable, i ) => (
          <div key={i} className="flex items-center min-w-fit lg:mr-20 lg:last-of-type:mr-0">
            <div className={`${bricolageGrotesque.className} text-5xl text-black font-bold w-[76px] h-[76px] p-2 flex items-center justify-center bg-[#75FA4D] rounded-full mr-6`}>{i+1}</div>
            <div className="font-semibold w-fit">{deliverable}</div>
          </div>
        ))}
      </div>
    </section>
  )
}