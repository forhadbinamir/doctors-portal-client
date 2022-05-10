import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Testimonial from './Testimonial';
const Testimonials = () => {
    const testimonial = [
        {
            _id: '1',
            name: 'Winson herry',
            city: 'california',
            picture: people1,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

        },
        {
            _id: '2',
            name: 'Winson herry',
            city: 'california',
            picture: people2,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

        },
        {
            _id: '3',
            name: 'Winson herry',
            city: 'california',
            picture: people3,
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'

        }
    ]
    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <h4 className='text-primary text-2xl uppercase'>Testimonial</h4>
                    <h2 className='text-1xl lg:text-3xl'>What Our Patients Says</h2>
                </div>
                <div className=''>
                    <img className='w-24 lg:w-32' src={quote} alt="" />
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
                {
                    testimonial.map(people => <Testimonial
                        key={people._id}
                        people={people}
                    ></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;