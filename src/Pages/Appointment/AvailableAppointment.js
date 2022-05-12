import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookAppointment from './BookAppointment';
import BookingModel from './BookingModel';

const AvailableAppointment = ({ date, setDate }) => {
    const [booking, setBooking] = useState([])
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [booking])


    return (

        <div className='my-12'>
            <div>
                <h2 className='mt-5 text-center text-primary text-3xl'>Available appointment: {format(date, 'PP')}</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5'>
                {
                    booking.map(service => <BookAppointment
                        key={service._id}
                        booking={service}
                        setTreatment={setTreatment}
                    ></BookAppointment>)
                }
            </div>
            {
                treatment && <BookingModel
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BookingModel>
            }
        </div>
    );
};

export default AvailableAppointment;