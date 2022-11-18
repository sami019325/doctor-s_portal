import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextData } from '../SharedRoute.js/SharedRoute';

const NavBar = () => {
    const { user, SignOutUser } = useContext(ContextData);

    const signOutBtn = () => {
        SignOutUser()

    }
    console.log('user nav============ ==== ==== ==== ===== == == == == == ', user?.photoURL)
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/' className='rounded-lg m-1'>Home</Link></li>
                    <li><Link to='/about' className='rounded-lg m-1'>About</Link></li>
                    <li><Link to='/appointment' className='rounded-lg m-1'>Appointment</Link></li>
                    <li><Link className='rounded-lg m-1'>Reviews</Link></li>
                    <li><Link to='dashboard' className='rounded-lg m-1'>DashBoard</Link></li>
                    <li><Link className='rounded-lg m-1'>Contract Us</Link></li>
                    {
                        user?.uid ? <li><button to='login' className='rounded-lg m-1' onClick={signOutBtn}>Log Out</button></li>
                            :
                            <li><Link to='login' className='rounded-lg m-1'>Log In</Link></li>
                    }
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg'} alt='user profile' />
                        </div>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;