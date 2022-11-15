import React from 'react';

const Btn = ({ children }) => {
    return (
        <button className='px-3 py-2 rounded bg-gradient-to-r from-primary to-secondary text-white'>
            {children}
        </button>
    );
};

export default Btn; 