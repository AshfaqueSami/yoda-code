import React from 'react';
import notfoundImg from '../../images/notfound/notfound1.png';

const NotFound = () => {
    return (
        <div className="flex justify-center">
            <div>
                <p className="text-3xl text-indigo-500 font-bold text-center">Sorry page not found</p>
                <img src={notfoundImg} alt="" />
            </div>
        </div>
    );
};

export default NotFound;