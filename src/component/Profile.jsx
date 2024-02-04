import Aul from "/src/assets/aul.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Profile = () => {
  return (
    <div className="max-sm:mb-12 flex max-sm:space-y-11 md:space-x-9 lg:space-x-28 justify-between max-md:items-center max-md:flex-col"
    data-aos="zoom-in"   
    data-aos-duration="1500" 
    data-aos-easing="ease-in-sine"
    data-aos-anchor-placement="center-bottom"
    >
     
      <img
        src={Aul}
        alt="aul"
        className="md:w-1/3 md:h-1/3 max-sm:w-72  -rotate-6 aspect-square  rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800  hover:rotate-6  hover:scale-120 duration-500 ease-in-out hover:shadow-xl  hover:shadow-lime-700 "
      />
      <div className="max-sm"

      >
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 leading-12">
          Hallo I am Aul ,<br /> a Second Year Information Systems Student @
          Andalas University
        </h1>
        <p className="mt-5 text-neutral-400 text-lg">
        I'm deeply passionate about programming, business, and design.
         My focus lies in expanding my expertise  <b className="text-neutral-200">Software Engginer.</b> 
         Besides, I devote my free time to engaging in graphic
          design projects. With a meticulous eye for detail and a 
          penchant for crafting visually captivating designs, I
           thrive on embracing fresh challenges that broaden my skill set. I look forward to the exciting paths my passion for technology and design will pave for me in the future.
        </p>
      </div>
    </div>
  );
};
export default Profile;
