import React from 'react';

const BookAppointment = ({ booking, setTreatment }) => {
    const { name, slots } = booking
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl my-10">
            <div class="card-body">
                <h2 class="card-title text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? < span >{slots[0]}</span>
                            :
                            <span>Try another day</span>
                    }
                </p>
                <p className='font-bold text-red-500'>{slots.length}{slots.length > 1 ? ' Spaces' : ' Space'} Available</p>
                <div class="card-actions justify-center">

                    <label onClick={() => setTreatment(booking)}
                        disabled={slots.length === 0} for="booking-modal" class="btn btn-primary modal-button">Book Appointment</label>
                </div>
            </div>
        </div >
    );
};

export default BookAppointment;