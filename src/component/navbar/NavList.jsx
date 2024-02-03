import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <nav className="border rounded-full px-3 border-gray-300">
      <ul className="flex justify-between  m-0 ">
        <li className="text-gray-300 px-3 py-2 hover:text-yellow-300 hover:scale-105 transition-all duration-500 ease-in-out  ">
          <Link
            to="/About"
            className="nav-item  text-sm font-semibold"
          >
            About
          </Link>
        </li>
        <li className="text-gray-300 px-3 py-2 hover:text-yellow-300 hover:scale-105 transition-all duration-500 ease-in-out ">
          <Link
            to="/Project"
            className="nav-item text-sm font-semibold "
          >
            Project
          </Link>
        </li>
        <li className="text-gray-300 hover:text-yellow-300 hover:scale-105 transition-all duration-500 ease-in-out px-3 py-2">
          <Link
            to="/Experience"
            className="nav-item   text-sm font-semibold   "
          >
            Experience
          </Link>
        </li> 
        <li className="text-gray-300 px-3 py-2 hover:text-yellow-300 hover:scale-105 transition-all duration-500 ease-in-out ">
          <Link
            to="/Contact"
            className="nav-item   text-sm font-semibold"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavList;
