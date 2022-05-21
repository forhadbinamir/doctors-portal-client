import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ appointment }) => {
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState('')
    const [success, setSuccess] = useState('')
    const { price, patient, patientName } = appointment
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClientSecret(data)
            })
    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('[error]', error);
            setCardError(error?.message)
            setSuccess('')
        } else {
            setCardError('[PaymentMethod]', paymentMethod);
        }
        // confirm card payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: patientName,
                    email: patient
                }
            }
        })
        if (intentError) {
            setCardError(intentError?.message)
        } else {
            setCardError('')
            console.log(paymentIntent)
            setSuccess("Congrats! Your payment is complete")
        }

    }
    return (
        <>
            <form onSubmit={handleSubmit} className="p-5">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-sm flex justify-start mt-5' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <p className='text-green-500'>{success}</p>
            }
        </>
    );
};

export default CheckoutForm;