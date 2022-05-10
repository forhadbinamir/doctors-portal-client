import React from 'react';

const Testimonial = ({ people }) => {
    const { picture, name, description, city } = people
    return (
        <div className='shadow rounded-lg p-5 my-10'>
            <div className='p-5'>
                <p>{description}</p>
            </div>
            <div className='flex items-center p-5'>
                <img src={picture} alt="" />
                <div className='ml-2'>
                    <h2>{name}</h2>
                    <h4>{city}</h4>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;