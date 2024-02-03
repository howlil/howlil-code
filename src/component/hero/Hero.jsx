import Title from "./Title";
import Sosmed from "./Sosmed";
import Frame from "./Frame";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 mt-20 ">
        <div className="flex flex-col items-center justify-center gap-2">
        <Frame/>
        <Title/>
        </div>
        <Sosmed/>
    </div>
  );
};

export default Hero;
