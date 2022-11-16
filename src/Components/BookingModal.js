import React from 'react';

const BookingModal = () => {
    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='w-10/12 m-auto bg-lime-300'>
                        <input className='w-full m-auto' type="date" />
                        <input className='w-full m-auto' type="text" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;