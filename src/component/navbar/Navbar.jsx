import NavBrand from "./NavBrand"
import NavList from "./NavList"

const Navbar = ()=>{
    return(
        <div className="flex justify-between w-full ">  
            <NavBrand/>
            <NavList/>
            <div></div>
        </div>
    )
}
export default Navbar