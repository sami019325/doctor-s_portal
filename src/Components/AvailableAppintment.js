import React, { useEffect, useState } from 'react';
import AvailableOptionsOfApointmnet from './AvailableOptionsOfApointmnet';
import BookingModal from './BookingModal';

const AvailableAppintment = (data) => {
    console.log(data.footer.props.children[1])
    const [appliontemnets, setAppointments] = useState([])
    const [bookedSlot, setBookedSlot] = useState(['ss'])
    console.log('declared--------------', setBookedSlot)

    useEffect(() => {
        fetch('AppointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className='mt-36'>
            <h1 className='text-secondary font-bold text-center mb-8'>Available Appointments on <span>{data.footer.props.children[1]}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    appliontemnets.map(slot => <>
                        <AvailableOptionsOfApointmnet
                            key={slot._id}
                            option={slot}
                            BookedSlotCall={'bookedSlot'}
                        ></AvailableOptionsOfApointmnet>
                    </>)
                }
            </div>
            <BookingModal></BookingModal>
        </div>
    );
};

export default AvailableAppintment;