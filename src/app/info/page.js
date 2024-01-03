import { bricolageGrotesque } from "../fonts"
import { sanityFetch } from "@/utils/api/sanityFetch"
import ClientImg from "@/components/ClientImg"
import AboutMe from "@/components/info/aboutMe/AboutMe"

export default async function Info(){
  const query = `*[_type == "info"][0]{
    ...,
    headshot{
      alt,
      asset -> {
      ...,
      metadata
    }},
  }`
  const info = await sanityFetch({query: query, qParams: {}})

  return (
    <section className="px-6 pt-4 lg:px-10">
      <ClientImg img={info.headshot} />
      <div className={`${bricolageGrotesque.className} text-2xl text-black font-bold leading-none mt-8`} >ABOUT ME</div>
      { info.about_blurb && 
        <AboutMe blurb={info.about_blurb} />
      }
    </section>
  )
}