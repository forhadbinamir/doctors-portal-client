import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../Firebase.init';

const MyAppointment = () => {
    const navigate = useNavigate()
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log(res)
                    if (res.status === 401 || res.status === 403) {
                        navigate('/login')
                    }
                    return res.json()
                })
                .then(data => {
                    setAppointment(data)
                })
        }
    }, [user])
    return (
        <div>
            <h2 className='text-center text-2xl p-3 rounded-lg bg-primary text-white'>My appointment list : {appointment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time Slot</th>
                            <th>treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((a, index) => <tr key={index} className='active'>
                                <th>{appointment.indexOf(a) + 1}</th>
                                <td>{a.patientName}</td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>{(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success'>Pay    </button></Link>}
                                    {(a.price && a.paid) && <span className=' text-success'>Paid</span>}
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;