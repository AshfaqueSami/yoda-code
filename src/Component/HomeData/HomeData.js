import React, { useEffect, useState } from 'react';
import HomeContent from '../HomeContent/HomeContent';

const HomeData = () => {
    const [courses, setCourses] = useState([])
    useEffect( () => {
        fetch('https://ashfaquesami.github.io/jsonfile/fakeData.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div>
            <div>
                {
                    courses.map(course => <HomeContent key = {course.key} course={course}></HomeContent>) 
                }
            </div>
        </div>
    );
};

export default HomeData;