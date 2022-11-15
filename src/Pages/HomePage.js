import React from 'react';
import TopImgCard from '../Components/TopImgCard';
import clock from './../Resources/clock.png'
import call from './../Resources/Path 7196.png'
import mapIcon from './../Resources/Path 7199.png'
import cavity from './../Resources/assets/images/cavity.png'
import whitening from './../Resources/assets/images/whitening.png'
import fluoride from './../Resources/assets/images/fluoride.png'
import LeftImgCard from '../Components/LeftImgCard';
import treatment from './../Resources/assets/images/treatment.png'
import doctorImg from './../Resources/assets/images/doctor.png'
import DoctorsKolla from '../Components/DoctorsKolla';

const HomePage = () => {

    const services = [
        {
            _id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. pariatur soluta libero labore explicabo aperiam'
        },
        {
            _id: 2,
            img: cavity,
            title: 'Cavity Filling',
            subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. pariatur soluta libero labore explicabo aperiam'
        },
        {
            _id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            subtitle: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. pariatur soluta libero labore explicabo aperiam'
        },
    ]
    return (
        <div>
            <div className='block lg:flex lg:flex-row-reverse w-10/12 m-auto mt-11 gap-3'>
                <div className='basis-1 lg:basis-1/2 bg-slate-900'>
                    <img className='w-full' src="https://www.crescentproducts.com/wp-content/uploads/2021/01/chair-2584260_1280.jpg" alt="" srcset="" />
                </div>
                <div className='basis-1 lg:basis-1/2'>
                    <h1 className='text-5xl font-bold'>Your New Smile Starts Here</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt molestiae debitis atque, quod sint odit quaerat laudantium rerum exercitationem, pariatur soluta libero labore explicabo aperiam enim harum nisi eius natus ducimus vero ut quia fugit? Mollitia dicta pariatur molestiae deserunt nulla, libero tenetur ipsum voluptate laborum, cum, doloremque rerum quo?</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 pt-5 w-10/12 m-auto mt-11'>
                <div className='bg-primary rounded-xl text-center md:text-justify grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 items-center text-white py-7 px-4'>
                    <div><img src={clock} alt="" srcset="" /></div>
                    <div className='col-span-1 md:col-span-2'>
                        <h1 className='text-lg font-bold'>Opening Hours</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='bg-accent rounded-xl text-center md:text-justify grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 items-center text-white py-7 px-4'>
                    <div><img src={call} alt="" srcset="" /></div>
                    <div className='col-span-1 md:col-span-2'>
                        <h1 className='text-lg font-bold'>Opening Hours</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
                <div className='bg-secondary rounded-xl text-center md:text-justify grid grid-cols-1 justify-items-center gap-5 md:grid-cols-3 items-center text-white py-7 px-4'>
                    <div><img src={mapIcon} alt="" srcset="" /></div>
                    <div className='col-span-1 md:col-span-2'>
                        <h1 className='text-lg font-bold'>Opening Hours</h1>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>

            {/* offerings */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-20 w-10/12 m-auto'>
                <TopImgCard key={services._id} card={services}></TopImgCard>
            </div>

            {/* other details  */}
            <div>
                <LeftImgCard data={
                    {
                        title: 'Exceptional Dental Care, on Your Terms',
                        details: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page`,
                        img: treatment
                    }
                }></LeftImgCard>

                {/* doctor's kolla  */}
                <DoctorsKolla
                    data={
                        {
                            title: 'Make an appointment Today',
                            details: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page`,
                            img: doctorImg
                        }
                    }
                ></DoctorsKolla>
            </div>
        </div>
    );
};

export default HomePage;