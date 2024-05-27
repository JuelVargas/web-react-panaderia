
import { imagenBreadWhite } from "../assets/images"
const BreadCard= ({ imgURL, changeImgBread, imgBigBread }) => {

    const handleClick = () => {
      if (imgBigBread !== imgURL.bigBread) {
        changeImgBread(imgURL.bigBread)
      }
    }
  
  
    return (
      <div className={`border-2 rounded-xl 
      ${imgBigBread === imgURL.bigBread
          ? 'border-accent/50 blur-0'
          : 'border-transparent'
        } cursor-pointer max-sm: flex-1
      bg-secondary/50 shadow-lg
      `}
        onClick={handleClick}
      >
        <div className=" flex justify-center items-center bg-card bg-ceter bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
          <img
            src={imgURL.bigBread}
            alt="bread"
            width={127}
            height={103}
            className="object-contain"
          />
        </div>
      </div>
    )
  }
  
  export default BreadCard