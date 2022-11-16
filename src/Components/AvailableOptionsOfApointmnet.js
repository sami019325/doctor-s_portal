import React from 'react';
import Btn from './Btn';

const AvailableOptionsOfApointmnet = (options, BookedSlotCall) => {
    const { name, slots } = options.option;
    const { bookedSlot } = BookedSlotCall;
    // const { setBookedSlot } = BookedSlotCall;
    // const BookedSlot = setBookedSlot.setBookedSlot
    console.log('--------------------------- ', bookedSlot)
    const setBooked = () => {
        console.log('-------------------booking')
        BookedSlotCall('samissssssssssssss')
    }

    return (
        <div className='flex flex-col gap-3 items-center justify-center bg-slate-100 p-5 rounded'>
            <h1 className='text-secondary font-bold text-center text-xl'>{name}</h1>
            <div className='text-slate-800 text-center'>
                <p>{slots.length === 0 ? "Try another day" : slots[0]}</p>
                <p>{slots.length}{slots.length > 1 ? ' SPACES AVAILABLE' : ' SPACE AVAILABLE'}</p>
            </div>

            <Btn><label onClick={setBooked} htmlFor="my-modal-3">Book Appointment</label></Btn>


            {/* modal=========================== */}


        </div>
    );
};

export default AvailableOptionsOfApointmnet;