
export default function WritingUI({ url, title, host }) {
  return (
    <div id="writing-cel" className="border-b border-black w-full h-content leading-none">
      <Link
        href={`${url}`}
        className=" w-full h-full flex justify-between items-center pb-[44px] font-semibold pl-[26px] pr-[35px] pt-[84px] "
      >
        <div className="w-1/2 text-[20px] sm:text-[32px]">{title}</div>
        <div className={`${inter.className} w-1/2 text-right text-[20px] sm:text-[40px]`}>{host}</div>
      </Link>
    </div>
  )
}