import React, { useEffect, useState } from 'react';
import HireTeacherContent from './HireTeacherContent';

const HireTeacherData = () => {
    const [teachers, setTeachers] = useState([])
    useEffect(() => {
        fetch('https://ashfaquesami.github.io/teacher/teacher.json')
            .then(res => res.json())
            .then(data => setTeachers(data))
    }, [])
    return (
        <div style={{backgroundColor:'#F3F4F6'}}>
            <h1  style={{ marginTop: '50px', fontWeight:'900', fontSize:'50px' }} className='text-center'>Our Populer Teachers</h1>
            <div style={{ marginTop: '80px' }}>
                {
                    teachers.map(teacher => <HireTeacherContent key={teacher.key} teacher={teacher}></HireTeacherContent>)
                }
            </div>
        </div>
    );
};

export default HireTeacherData;