import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Firebase.init';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`)
                .then(res => res.json())
                .then(data => setAppointment(data))
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center text-2xl p-3 rounded-lg bg-primary text-white'>My appointment list : {appointment.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time Slot</th>
                            <th>treatment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map(a => <tr className='active'>
                                <th>{appointment.indexOf(a) + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;