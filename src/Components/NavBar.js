import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='rounded-lg m-1'>Home</Link></li>
                    <li><Link className='rounded-lg m-1'>About</Link></li>
                    <li><Link className='rounded-lg m-1'>Appointment</Link></li>
                    <li><Link className='rounded-lg m-1'>Reviews</Link></li>
                    <li><Link className='rounded-lg m-1'>Contract Us</Link></li>
                    <li><Link className='rounded-lg m-1'>Log In</Link></li>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;