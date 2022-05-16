import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../Firebase.init';
const BookingModel = ({ date, treatment, setTreatment, refetch }) => {
    const formattedDate = format(date, 'PP')
    const { _id, name, slots } = treatment
    const [user] = useAuthState(auth)
    const handleBooking = event => {
        event.preventDefault()
        const slot = event.target.slot.value;
        // console.log(slot, name, _id)
        const booking = {
            treatment: name,
            treatmentId: _id,
            date: formattedDate,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.number.value
        }
        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    toast(`Appointment is set ${formattedDate}at ${slot}`)
                }
                else {

                    toast.error(`Already have an appointment on ${data?.booking?.date} at ${data?.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">

                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-primary">Booking Appointment:    {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-3'>
                        <input type="text" disabled readOnly value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }

                        </select>
                        <input type="text" name='name' disabled value={user?.displayName || ""} className="input input-bordered w-full max-w-xs" />
                        <input type="Email" name='email' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='number' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit" className="btn btn-primary w-full max-w-xs" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModel;