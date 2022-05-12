import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import BtnPrimary from './BtnPrimary';
const Banner = () => {
    return (
        // style={{ backgroundImage: `url(${chair})` }} 
        <div style={{ backgroundImage: `url(${bg})` }} className=" bg-no-repeat cover hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='basis-1/2'>
                    <img src={chair} className="rounded-lg shadow-2xl" />
                </div>
                <div className='basis-1/2'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <BtnPrimary>GET STARTED</BtnPrimary>
                </div>
            </div>
        </div>

    );
};

export default Banner;