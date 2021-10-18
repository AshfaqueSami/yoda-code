import React, { useEffect, useState } from 'react';

const HomeData = () => {
    const [courses, setCourses] = useState([])
    useEffect( () => {
        fetch('https://ashfaquesami.github.io/jsonfile/fakeData.json')
        .then(res => res.json)
        .then(data => console.log(data))
    },[])
    return (
        <div>
            
        </div>
    );
};

export default HomeData;