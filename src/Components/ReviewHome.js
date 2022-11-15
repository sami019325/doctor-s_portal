import React from 'react';
import people1 from './../Resources/assets/images/people1.png'
import people2 from './../Resources/assets/images/people2.png'
import people3 from './../Resources/assets/images/people3.png'
const ReviewHome = () => {
    const comment = [
        {
            _id: 1,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Sami Ahmed',
            city: 'Dhaka',
            img: people1
        },
        {
            _id: 2,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Aajamn Sami',
            city: 'Gazipur',
            img: people2
        },
        {
            _id: 3,
            comment: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Sam Sam',
            city: 'Imagination',
            img: people3
        },

    ]
    return (
        <div className=''>
            <p className='font-bold text-secondary'>TESTIMONIAL</p>
            <h1 className='text-4xl'>What Our Patients Say</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 h-60 mt-20'>
                {
                    comment.map(data => <>
                        <div key={data._id} className='p-5 w-72 bg-slate-100 rounded-md'>
                            <p>{data.comment}</p>
                            <div className='flex gap-5 mt-10'>
                                <div className='w-14'><img src={data.img} alt="" srcset="" /></div>
                                <div className=''>
                                    <h3>{data.name}</h3>
                                    <h4>{data.city}</h4>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default ReviewHome;