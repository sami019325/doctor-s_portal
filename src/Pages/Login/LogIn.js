import React, { useContext } from 'react';
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { ContextData } from '../../SharedRoute.js/SharedRoute';
import { useLocation, useNavigate } from 'react-router-dom';


const LogIn = () => {

    const { GoogleSignInCall, setUser } = useContext(ContextData)

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [data, setData] = useState("");
    console.log(data)


    // location 

    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from.pathname || '/'

    //location.state?.from?.pathname || "/"








    // call google sign In 
    const btnClick = () => {
        GoogleSignInCall()
            .then((result) => {
                // The signed-in user info.
                setUser(result.user)
                //========================================
                navigate(from, { replace: true })
                // =======================================
            }).catch((error) => {
                // Handle Errors here.
                console.error(error)
            });
    }

    return (
        <div className='bg-slate-100 py-10'>
            <h1 className='text-xl font-bold text-center my-10'>Log In</h1>
            <form className='w-10/12 md:w-6/12 m-auto' onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <input className='input input-bordered input-primary w-full m-auto my-2 ' {...register("email", { required: true })} placeholder="Email" />
                {/* <select className='input input-bordered input-primary w-full m-auto my-2 ' {...register("category", { required: true })}>
                    <option value="">Select...</option>
                    <option value="A">Option A</option>
                    <option value="B">Option B</option>
                </select> */}
                <input className='input input-bordered input-primary w-full m-auto my-2 ' {...register("password", {
                    required: true,
                    pattern: { value: /[a-zA-Z0-9!@#$%^&*]{6,16}$/, message: 'Password must be strong' }
                })} placeholder="Password" />
                <p>{data}</p>
                <input className='btn w-full' type="submit" />
                {errors.password && <p>{errors.password.message}</p>}
            </form>
            <div className='w-10/12 md:w-6/12 m-auto'>
                <p className='text-center my-5'>New to Doctors Portal? <span className='text-secondary'><Link>Create new account</Link></span></p>
                <div className="divider">OR</div>
                <div className="btn btn-outline w-full" onClick={btnClick}>CONTINUE WITH GOOGLE</div>
            </div>
        </div>

    );
};

export default LogIn;