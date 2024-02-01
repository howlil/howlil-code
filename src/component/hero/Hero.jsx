import Title from "./Title";
import Sosmed from "./Sosmed";
import Frame from "./Frame";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-20 ">
      <Frame />
      <Title />
      <Sosmed />
    </div>
  );
};

export default Hero;
