// import React from "react"
import Navbar from "../component/navbar/Navbar"
import Hero from "../component/hero/Hero"
import Container from "../component/Container"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home =()=>{
    return(
        <>
        <Container  >
        <div 
         data-aos="zoom-in"   
         data-aos-duration="1500" 
         data-aos-easing="ease-in-out"
         data-aos-anchor-placement="center-bottom">
         <Navbar/>
         </div>
         <div 
         data-aos="fade-up"   
         data-aos-duration="1500" 
         data-aos-easing="ease-in-out"
         data-aos-anchor-placement="center-bottom">

            <Hero />
         </div>
         
        </Container>
        </>
    )

}

export default Home