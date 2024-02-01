import { Link } from "react-router-dom"

const NavList = ()=>{
    return(
        <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between items-center">
          <li className="text-white">
            <Link to="/about" className="nav-item px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">About</Link>
          </li>
          <li className="text-white">
            <Link to="/services" className="nav-item px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Services</Link>
          </li>
          <li className="text-white">
            <Link to="/contact" className="nav-item px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Contact</Link>
          </li>
        </ul>
      </nav>
      
    )
}
export default NavList