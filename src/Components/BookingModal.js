import React from 'react';

const BookingModal = ({ appliontemnets, bookedSlot }) => {
    console.log('modal================================================================', bookedSlot)
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='w-10/12 m-auto '>
                        <input type="text" placeholder="Type here" disabled defaultValue={appliontemnets} className="input input-bordered w-full m-auto my-2" />
                        <div className="form-control w-full ">
                            <select className="select select-bordered w-full m-auto">
                                <option disabled selected className=''>Pick a schedule</option>
                                {
                                    bookedSlot.map(data => <option>{data}</option>)
                                }

                            </select>
                        </div>
                        <input type="text" placeholder="Name" className="input input-bordered w-full m-auto my-2" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full m-auto my-2" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;