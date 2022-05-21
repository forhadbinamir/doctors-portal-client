import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useToken from '../../Hooks/useToken';
import auth from '../Firebase.init';
import Loading from '../Shared/Loading/Loading';
const Login = () => {
    const [signInWithGoogle, googleUser, googleError, googleLoading] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
        auth
    );
    const { register, handleSubmit, getValues, formState: { errors } } = useForm();
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const [token] = useToken(user || googleUser)
    const location = useLocation()
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])
    let errorText;
    if (error || googleError) {
        errorText = <p className='text-red-500'><small>{error?.message} {googleError?.message}</small></p>
    }
    if (loading || googleLoading) {
        return <Loading></Loading>
    }

    const handleResetPassword = async () => {
        const email = getValues('email')

        if (!email) {
            toast('Please enter your email')
        } else {

            await sendPasswordResetEmail(email)
            toast('Reset email sended')
        }


    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}

                                type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 character longer'
                                    }
                                })}

                                type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {errorText}
                        <button type='submit' className="btn w-full max-w-xs">Login</button>
                        <p className='text-center mt-1'>Are you new to here <Link className='text-primary' to='/signup'>Please SingUp</Link> </p>
                        <p onClick={handleResetPassword} className='text-yellow-300 cursor-pointer text-center'>Forget Password</p>
                    </form>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline">Sign in With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;