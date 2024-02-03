import Aul from "/src/assets/howl.jpg";
import { Link } from "react-router-dom";

const Frame = () => {
  return (
    <>
    <Link to="/About">
      <img
        className="rounded-full  h-40 border-gray-100 border-2 hover:scale-105   transition-all duration-500 ease-in-out   "
        src={Aul}
        alt="aul"
      />
    </Link>
    </>
  );
};

export default Frame;
