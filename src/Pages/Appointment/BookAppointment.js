import React from 'react';

const BookAppointment = ({ booking, setTreatment }) => {
    const { name, slots, price } = booking
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-10">
            <div className="card-body text-center">
                <h2 className="text-center text-2xl font-bold text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? < span >{slots[0]}</span>
                            :
                            <span>Try another day</span>
                    }
                </p>
                <p className='font-bold'>{slots.length}{slots.length > 1 ? ' Spaces' : ' Space'} Available</p>
                <p className='font-bold'>Price: <span className='text-yellow-400'>${price}</span></p>
                <div className="card-actions justify-center">

                    <label onClick={() => setTreatment(booking)}
                        disabled={slots.length === 0} htmlFor="booking-modal" className="btn modal-button">Book Appointment</label>

                </div>
            </div>
        </div >
    );
};

export default BookAppointment;