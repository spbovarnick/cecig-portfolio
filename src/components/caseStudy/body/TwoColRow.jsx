import ImgRight from "./twoCol/ImgRight"
import ImgLeft from "./twoCol/ImgLeft"

export default function TwoColRow({ row, blockComponents}) {
 
  return(
    <div className="lg:grid lg:grid-cols-2 h-718 overflow-hidden">
      {row.img_side === "right" ? (
        <ImgRight blockComponents={blockComponents} text={row.left_col_text} img={row.right_col_img} />
      ) : (
        <ImgLeft blockComponents={blockComponents} text={row.right_col_text} img={row.left_col_img} />
      )}
    </div>
  )
}