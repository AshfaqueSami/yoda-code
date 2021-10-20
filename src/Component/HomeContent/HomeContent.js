import React from 'react';
import { useHistory } from 'react-router';

const HomeContent = (props) => {
    const history = useHistory();
    const { id, title, img, description } = props.course;
    const dynamicRouteSet = (id) => {
        history.push(`/service/${id}`);
    }
    return (
        <div>
            <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-96 lg:aspect-none'>
                <img className="lg:h-64 lg:w-96 h-64 w-96" src={img} alt="" />
                <p className="text-md text-indigo-600 font-bold">{title}</p>
                <div className="gap-y-6">
                    <p className='mt-1 text-sm text-gray-500'>{description}</p>
                    <button onClick={()=>dynamicRouteSet(`${id}`)} type="button" class="mt-4 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                        Click to see details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;