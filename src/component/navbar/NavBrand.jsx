import Aul from "/src/assets/aul.jpg"
import { Link } from "react-router-dom";

const NavBrand = ()=>{

    return(
        <Link to="/">  
        <img className="rounded-full h-11 border-gray-400 border-2  " src={Aul} alt="" />  
        </Link>
    )
    
}
export default NavBrand