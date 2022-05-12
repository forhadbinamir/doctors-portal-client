import React from 'react';
import treatment from '../../assets/images/treatment.png'
import BtnPrimary from './BtnPrimary';
const DentalService = () => {
    return (
        <div className=" bg-no-repeat cover hero min-h-screen my-16">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='basis-1/2 pl-5 py-10'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <BtnPrimary>GET STARTED</BtnPrimary>
                </div>
                <div className='basis-1/2 pl-0'>
                    <img src={treatment} className="rounded-lg shadow-2xl " />
                </div>
            </div>
        </div>
    );
};

export default DentalService;