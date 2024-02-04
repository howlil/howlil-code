import Navbar from "../component/navbar/Navbar"
import Container from "../component/Container"
import Resume from "../component/resume"
import Skill from "../component/Skill"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Experience =()=>{
    return(
        <>
        <Container>

          <Navbar/>
          <div
               data-aos="fade-up"   
               data-aos-duration="1500" 
               data-aos-easing="ease-in-out"
               data-aos-anchor-placement="center-bottom"
          >

          <Resume/>
          <Skill/>
          </div>
        </Container>
        </>
    )

}

export default Experience