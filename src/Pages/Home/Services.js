import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';
const Services = () => {
    const services = [
        {
            _id: '1',
            name: 'Fluoride Treatment',
            picture: fluoride,
            description: 'If a dog chews shoes whose shoes does he choose?'

        },
        {
            _id: '2',
            name: 'Fluoride Treatment',
            picture: cavity,
            description: 'If a dog chews shoes whose shoes does he choose?'

        },
        {
            _id: '3',
            name: 'Fluoride Treatment',
            picture: whitening,
            description: 'If a dog chews shoes whose shoes does he choose?'

        }
    ]
    return (
        <div>
            <div className='text-center m-10'>
                <h2 className='text-primary text-3xl uppercase'>Our Services</h2>
                <h3 className='text-4xl'>Services We Provided</h3>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    services.map(pd => <Service
                        key={pd._id}
                        service={pd}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;