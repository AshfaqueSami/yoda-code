import React from 'react';

const HomeContent = (props) => {
    const {title,img,description} = props.course
    return (
        <div>
            <h3>{title}</h3>
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default HomeContent;