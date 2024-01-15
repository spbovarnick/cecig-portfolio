import ImgRight from "./twoCol/ImgRight"
import ImgLeft from "./twoCol/ImgLeft"

export default function TwoColRow({ row, blockComponents}) {
 
  return(
    <div className="csb:flex csb:justify-center">
      <div className="h-fit flex flex-col csb:flex-none csb:grid csb:grid-cols-2 csb:h-720 csb:max-w-[1280px] csb:overflow-hidden">
        {row.img_side === "right" ? (
          <ImgRight blockComponents={blockComponents} text={row.left_col_text} img={row.right_col_img} />
        ) : (
          <ImgLeft blockComponents={blockComponents} text={row.right_col_text} img={row.left_col_img} />
        )}
      </div>
    </div>
  )
}