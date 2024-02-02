import Figcapt from "./Figcapt"
import Tag from "./Tag"


const Card = ()=>{
    return(
        <div className=" w-1/3 border rounded-lg border-gray-400 p-3 mt-12 hover:shadow-xl   shadow-cyan-400 transition-all ease-in-out duration-500 ">
            <Figcapt/>
            <Tag/>
        </div>
    )
}
export default Card