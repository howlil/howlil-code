import Aul from "/src/assets/howl.jpg";
import { Link } from "react-router-dom";

const Frame = () => {
  return (
    <>
    <Link to="/About">
      <img
        className="rounded-full  h-40 border-gray-100 border-2  "
        src={Aul}
        alt=""
      />
    </Link>
    </>
  );
};

export default Frame;
