import NavBrand from "./NavBrand"
import NavList from "./NavList"
import {useLocation} from "react-router-dom"

const Navbar = ()=>{
    const location = useLocation();
    const isHome = location.pathname === '/'

    return(
        <div className={`navbar flex mt-5 mb-12 items-center ${!isHome? `justify-between` : 'justify-center' } `}>  
            {!isHome && <NavBrand/>  } 
            <NavList/>   
            {!isHome && <div></div>} 

        </div>
    )
}
export default Navbar