import React from 'react';
import bgD from './../Resources/assets/images/appointment.png'

const DoctorsKolla = (card) => {
    const { title, img, details } = card.data
    return (
        <div style={{ background: `url(${bgD})` }} className="card card-side w-10/12 m-auto mt-40 bg-base-100 shadow-xl grid grid-cols-1 lg:grid-cols-2">
            <figure className='w-10/12 -mt-32 '><img className='h-full hidden md:block' src={img} alt="Movie" /></figure>
            <div className="flex flex-col justify-center gap-4 text-justify m-5">
                <p className='font-bold text-secondary'>Appointment</p>
                <div className='text-white flex flex-col justify-center gap-3 text-justify '>
                    <h2 className="card-title text-3xl">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorsKolla;