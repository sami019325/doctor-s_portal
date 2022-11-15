import React from 'react';
import bgCont from './../Resources/assets/images/appointment.png'
import Btn from './Btn';
const ContractUS = () => {
    return (
        <div className='mt-20 p-10' style={{ background: `url(${bgCont})` }} >
            <div className='w-6/12 m-auto flex flex-col justify-center items-center'>
                <p className='font-bold text-secondary'>Contact us</p>
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
                <form action="" className='flex flex-col justify-center items-center'>
                    <div>
                        <input className='w-full m-1 p-2 rounded' type="email" name="email" id="" />
                        <input className='w-full m-1 p-2 rounded' type="text" name="text" id="" />
                        <textarea className='w-full m-1 p-2 rounded h-32' type="email" name="email" id="" />
                    </div>
                    <Btn>Submit</Btn>
                </form>
            </div>

        </div>
    );
};

export default ContractUS;