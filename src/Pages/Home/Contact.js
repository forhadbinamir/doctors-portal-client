import React from 'react';
import bgform from '../../assets/images/appointment.png'
const Contact = () => {
    return (
        <section style={{ backgroundImage: `url(${bgform})` }} className='border ' >
            <div className='text-center my-3'>
                <h4 className='text-primary text-2xl '>Contact Us</h4>
                <h2 className='text-white text-3xl '>Stay connected with us</h2>
            </div>
            <form className='w-80 mx-auto my-5'>
                <input className='mb-2 w-full border p-2 rounded-lg' type="email" placeholder='Email' />
                <input className='mb-2 w-full border p-2 rounded-lg' type="text" placeholder='Subject' />
                <textarea className='mb-2 w-full border rounded-lg' name="" id="" cols="30" rows="4"></textarea>
                <div className='flex justify-center'>
                    <input className='bg-primary py-2 px-3 rounded text-white font-bold w-24 mx-auto' type="submit" value="submit" />
                </div>
            </form>
        </section>
    );
};

export default Contact;