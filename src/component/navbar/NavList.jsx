import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <nav className="border rounded-full px-3 border-gray-300">
      <ul className="flex justify-between  m-0 ">
        <li className="text-gray-300 px-3 py-2 ">
          <Link
            to="/About"
            className="nav-item  text-sm font-semibold hover:text-lime-400 transition-all duration-500 ease-in-out"
          >
            About
          </Link>
        </li>
        <li className="text-gray-300 px-3 py-2">
          <Link
            to="/Project"
            className="nav-item text-sm font-semibold hover:text-lime-400 transition-all duration-500 ease-in-out "
          >
            Project
          </Link>
        </li>
        <li className="text-gray-300 px-3 py-2">
          <Link
            to="/Experience"
            className="nav-item   text-sm font-semibold hover:text-lime-400 transition-all duration-500 ease-in-out"
          >
            Experience
          </Link>
        </li>
        <li className="text-gray-300 px-3 py-2">
          <Link
            to="/Contact"
            className="nav-item   text-sm font-semibold hover:text-lime-400 transition-all duration-500 ease-in-out"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavList;
