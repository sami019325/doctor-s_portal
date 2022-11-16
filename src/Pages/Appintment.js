import React, { useState } from 'react';
import img from './../Resources/assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import AvailableAppintment from '../Components/AvailableAppintment';



const Appointment = () => {
    const [selected, setSelected] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }
    return (
        <div>
            <div className='flex flex-col lg:flex-row-reverse w-10/12 m-auto my-20'>
                <div className='w-full basis-1 md:basis-1/2'><img src={img} alt="" srcset="" /></div>
                <div className='w-full basis-1 md:basis-1/2'>
                    <DayPicker
                        mode="single"
                        selected={selected}
                        onSelect={setSelected}

                    />
                </div>
                <AvailableAppintment footer={footer}></AvailableAppintment>
            </div>
        </div>
    );
};

export default Appointment;



