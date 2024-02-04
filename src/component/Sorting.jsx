// Sorting component
import React, { useEffect, useState } from 'react';
import { dataProject } from '../data/dataProject';

const Sorting = ({ selectCategory, setSelectCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const uniqueCategories = Array.from(new Set(dataProject.map(project => project.id)));
        setCategories(uniqueCategories);
    }, []);

    return (
        <>
            <select 
                value={selectCategory} 
                onChange={(e) => setSelectCategory(e.target.value)}
                className='mb-4 md:ml-3 px-2 py-2 rounded-lg bg-neutral-700 text-gray-50'
            >
                <option  className="text-sm p-3" value="">All</option>
                {categories.map((category, index) => (
                    <option 
                   
                    key={index} value={category}>{category}</option>
                ))}
            </select>
        </>
    );
};

export default Sorting;
