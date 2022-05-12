import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const info = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 my-10'>
            <InfoCard img={clock} bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Opening Hours'></InfoCard>
            <InfoCard img={marker} bgClass='bg-neutral' cardTitle='Our Locations'></InfoCard >
            <InfoCard img={phone} bgClass='bg-gradient-to-r from-secondary to-primary' cardTitle='Contact Us'></ InfoCard>
        </div>
    );
};

export default info;