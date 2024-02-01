import NavBrand from "./NavBrand"
import NavList from "./NavList"

const Navbar = ()=>{
    return(
        <div className="navbar flex mt-5 justify-center">  
            {/* <NavBrand/> */}
            <NavList/>     
            {/* <div></div>      */}
        </div>
    )
}
export default Navbar