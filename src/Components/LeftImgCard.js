import React from 'react';
import Btn from './Btn';

const LeftImgCard = (card) => {
    const { title, img, details } = card.data
    return (
        <div className="card card-side w-10/12 m-auto mt-20 bg-base-100 shadow-xl grid grid-cols-1 gap-5 lg:grid-cols-2 p-3">
            <figure className='w-full'><img src={img} alt="Movie" /></figure>
            <div className="flex flex-col justify-center  gap-5 text-justify">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-start">
                    <Btn>Book Now</Btn>
                </div>
            </div>
        </div>
    );
};

export default LeftImgCard;