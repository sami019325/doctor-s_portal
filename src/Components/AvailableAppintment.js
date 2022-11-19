import { async } from '@firebase/util';
import { useQueries } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import AvailableOptionsOfApointmnet from './AvailableOptionsOfApointmnet';
import BookingModal from './BookingModal';

const AvailableAppintment = (datas) => {
    console.log(datas.footer.props.children[1])
    // const [appliontemnets, setAppointments] = useState([])
    const [bookedSlot, setBookedSlot] = useState(['ss'])


    const { data: appliontemnets = [] } = useQueries({
        queryKey: ['appliontemnets'],
        queryFn: () => fetch('http://localhost:5000/appointmentdata')
            .then(res => res.json())
    })


    // const { data: appliontemnets = [] } = useQueries({
    //     queryKey: ['appliontemnets'],
    //     queryFn: async () => {
    //         const res = await fetch('http://localhost:5000/appointmentdata')
    //         const data = res.json()
    //         return data;
    //     }
    // })



    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentdata')
    //         .then(res => res.json())
    //         .then(data => setAppointments(data))
    // }, [])


    console.log('data ============== = ====== ========= ======= === data ============== =============', appliontemnets)
    return (
        <div className='mt-36'>
            <h1 className='text-secondary font-bold text-center mb-8'>Available Appointments on <span>{datas.footer.props.children[1]}</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    appliontemnets.map(slot => <>
                        <AvailableOptionsOfApointmnet
                            key={slot._id}
                            option={slot}
                            bookedSlotCall={setBookedSlot}
                        ></AvailableOptionsOfApointmnet>
                    </>)
                }
            </div>
            <div>
                <BookingModal
                    appliontemnets={datas.footer.props.children[1]}
                    bookedSlot={bookedSlot}
                ></BookingModal>
            </div>
        </div>
    );
};

export default AvailableAppintment;