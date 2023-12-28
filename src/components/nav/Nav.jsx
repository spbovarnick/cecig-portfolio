import Link from "next/link"

export default function Nav() {
  return (
    <div className="flex w-screen justify-center items-center sticky">
      <div className="text-bold flex gap-x-[42px] py-10">
        <a href="#work">WORK</a>
        <Link href={'/link'}>INFO</Link>
      </div>
    </div>
  )
}