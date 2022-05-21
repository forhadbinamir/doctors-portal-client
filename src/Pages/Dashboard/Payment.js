import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const stripePromise = loadStripe('pk_test_51L1hnGIKPVQVfNhJ6NTJQGva9QNuLhQSHjpleLvgV1IzmguJfVkfIuSI0cMD6eWPscwWZZQaFrii3HxFU4twsPSn00oRmMOEqx');
    const { id } = useParams()
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='bg-purple-200 py-20'>
            {/* <h2>treatment Id: {id}</h2> */}
            <div className="card text-center w-96 mx-auto my-5 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p className='font-bold'>Hello!: {appointment.patientName} </p>
                    <h2 className="text-center text-1xl font-bold text-primary">Your Appointment: {appointment.treatment}</h2>
                    <p className='font-bold'>Date: {appointment.date} </p>
                    <p className='font-bold'>Time: {appointment.slot}</p>
                    <p className='font-bold'>Please Pay: <span className='text-yellow-400'>${appointment.price}</span></p>

                </div>
            </div>
            <div className="card text-center w-96 mx-auto my-5 bg-base-100 shadow-xl">
                <Elements stripe={stripePromise}>
                    <CheckoutForm appointment={appointment} />
                </Elements>
            </div>

        </div>
    );
};

export default Payment;