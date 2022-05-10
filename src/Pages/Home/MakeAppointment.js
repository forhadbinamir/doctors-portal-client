import React from 'react';
import doctors from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import BtnPrimary from './BtnPrimary';
const MakeAppointment = () => {
    return (
        <section style={{ backgroundImage: `url(${appointment})` }} className='flex justify-center items-center my-10'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctors} alt="" />
            </div>
            <div className='flex-1 p-5'>
                <h2 className='text-primary uppercase'>Appointment</h2>
                <h1 className='text-white text-3xl mb-3'>Make an appointment Today</h1>
                <p className='text-white mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>

                <BtnPrimary>GET STARTED</BtnPrimary>
            </div>
        </section>
    );
};

export default MakeAppointment;