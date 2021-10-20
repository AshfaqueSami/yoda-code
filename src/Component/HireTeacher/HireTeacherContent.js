import React from 'react';
import { Route } from 'react-router';

const HireTeacherContent = (props) => {
    const { name, style, img, description } = props.teacher
    return (
        <div >

            <section class="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
                <div style={{ borderRadius: '39px' }} class="bg-white dark:bg-gray-800 lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg">
                    <div class="lg:w-1/2">
                        <div class="h-64 bg-cover lg:rounded-lg lg:h-full" >
                            <img style={{ borderRadius: '10%', width: '509px', height: '345px' }} src={img} alt="" />
                        </div>
                    </div>

                    <div class="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                        <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">{name}</h2><br />
                        <span>Style: {style}</span>
                        <p class="mt-4 text-gray-600 dark:text-gray-400">{description}</p>

                        <div class="mt-8">

                            <a class="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HireTeacherContent;