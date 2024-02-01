import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <nav className="border rounded-full border-yellow-400 px-10 py-3">
      <ul className="flex justify-between items-center">
        <li className="text-white">
          <Link
            to="/About"
            className="nav-item px-3 py-2  text-lg font-medium hover:text-yellow-400 transition-all duration-500 ease-in-out"
          >
            About
          </Link>
        </li>
        <li className="text-white">
          <Link
            to="/Project"
            className="nav-item px-3 py-2 rounded-md text-lg font-medium hover:text-yellow-400 transition-all duration-500 ease-in-out "
          >
            Project
          </Link>
        </li>
        <li className="text-white">
          <Link
            to="/Experience"
            className="nav-item px-3 py-2 rounded-md text-lg font-medium hover:text-yellow-400 transition-all duration-500 ease-in-out"
          >
            Experience
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavList;
