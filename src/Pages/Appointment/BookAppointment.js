import React from 'react';

const BookAppointment = ({ booking, setTreatment }) => {
    const { name, slots } = booking
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl my-10">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>
                    {
                        slots.length
                            ? < span >{slots[0]}</span>
                            :
                            <span>Try another day</span>
                    }
                </p>
                <p className='font-bold text-red-500'>{slots.length}{slots.length > 1 ? ' Spaces' : ' Space'} Available</p>
                <div className="card-actions justify-center">

                    <label onClick={() => setTreatment(booking)}
                        disabled={slots.length === 0} htmlFor="booking-modal" className="btn btn-primary modal-button">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default BookAppointment;