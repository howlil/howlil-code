// Project component
import React, { useState, useEffect } from 'react';
import Navbar from "../component/navbar/Navbar";
import Card from "../component/Card";
import Container from "../component/Container";
import Sorting from "../component/Sorting";
import { dataProject } from '../data/dataProject';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Project = () => {
    const [selectCategory, setSelectCategory] = useState('');
    const [filteredProjects, setFilteredProjects] = useState(dataProject);

    useEffect(() => {
        if (selectCategory) {
            setFilteredProjects(dataProject.filter(project => project.id === selectCategory));
        } else {
            setFilteredProjects(dataProject);
        }
    }, [selectCategory]);

    return (
        <>
            <Container>
                <Navbar />
                <div
                        data-aos="fade-up"   
                        data-aos-duration="1500" 
                        data-aos-easing="ease-in-out"
                        data-aos-anchor-placement="center-center"
                >

                <Sorting 
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                />
                <Card projects={filteredProjects} />
                </div>
            </Container>
        </>
    );
};

export default Project;
