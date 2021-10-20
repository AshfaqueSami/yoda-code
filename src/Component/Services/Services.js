import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Services = () => {
    const [services, setServices] = useState([]);
    const [singleService, setSingleService] = useState({})
    const { serviceId } = useParams();
    useEffect(() => {
        fetch('https://ashfaquesami.github.io/jsonfile/fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    useEffect(() => {
        if (services.length) {
            const foundService = services.find((data) => data.id == serviceId);
            setSingleService(foundService);
        }
    }, [services]);
    return (
        <div>
            <section className="p-6 dark:bg-coolGray-800 dark:text-coolGray-100">
                <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-coolGray-900">
                        <h1 className="text-5xl font-extrabold dark:text-coolGray-50">{singleService.title}</h1>
                        <p className="my-8">
                            {singleService.description}
                        </p>
                    </div>
                    <img src={singleService.img}alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-coolGray-500"/>
                </div>
            </section>
        </div>
    );
};

export default Services;