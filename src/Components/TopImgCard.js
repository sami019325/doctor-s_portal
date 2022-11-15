import React from 'react';

const TopImgCard = ({ card }) => {
    console.log(card)
    // const [img, title, subtitle] = services
    return (
        card.map(data =>
            <div className='flex flex-col items-center justify-center bg-slate-100 rounded-md p-3'>
                <img src={data.img} alt="Something" />
                <div className='text-center'>
                    <h1 className='text-xl text-primary mt-7'>{data.title}</h1>
                    <p>{data.subtitle}</p>
                </div>
            </div>
        )
    );
};

export default TopImgCard;