import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
const Adddoctor = () => {
    //react hook form here
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { data: services, isLoading } = useQuery('service', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = "f27f515602bb0aea686d8cbbdf9448d4"
    const onSubmit = async data => {
        const image = data.photo[0]
        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }
                    // send to your database
                    fetch('http://localhost:5000/doctor', {
                        method: "POST",
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(upserted => {
                            if (upserted.insertedId) {
                                toast.success('Doctor info added successfully')
                                reset()
                            }
                            console.log('data updated', upserted)
                        })
                }
                console.log('imgbb', result)

            })
    };
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='flex min-h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-bold text-2xl">Add a Doctor</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                })}
                                type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>

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
                                <span className="label-text">Specialty</span>
                            </label>
                            <select {...register('specialty')} className="select select-bordered w-full max-w-xs relative z-index-10">
                                {
                                    services?.map(pd => <option
                                        key={pd._id}
                                        value={pd.name}
                                    >
                                        {pd.name}
                                    </option>)
                                }
                            </select>
                            <label className="label">
                                {errors.specialty?.type === 'required' && <span className="label-text-alt text-red-500">{errors.specialty.message}</span>}


                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                {...register("photo", {
                                    required: {
                                        value: true,
                                        message: 'photo is Required'
                                    },
                                })}
                                type="file" placeholder="Photo" className="input input-bordered w-full max-w-xs border-0" />

                        </div>

                        <button type='submit' className="btn w-full max-w-xs">Add Doctor</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Adddoctor;