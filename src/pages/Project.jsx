// Project component
import React, { useState, useEffect } from 'react';
import Navbar from "../component/navbar/Navbar";
import Card from "../component/Card";
import Container from "../component/Container";
import Sorting from "../component/Sorting";
import { dataProject } from '../data/dataProject';

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
                <Sorting 
                    selectCategory={selectCategory}
                    setSelectCategory={setSelectCategory}
                />
                <Card projects={filteredProjects} />
            </Container>
        </>
    );
};

export default Project;
