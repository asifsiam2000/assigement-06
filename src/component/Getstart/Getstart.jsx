import React from 'react';
import img1 from "../../assets/user.png"
import img2 from "../../assets/package.png";
import img3 from "../../assets/rocket.png";

const Getstart = () => {
    return (
        <div className='w-[80%] container mx-auto my-20'>
            <div className='text-center space-y-2'>
                <h2 className='text-3xl font-bold'>Get Started in 3 Steps</h2>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
            </div>

            




            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

                <div className='bg-base-300 p-8 mt-9 rounded-2xl'>

                    <div className='flex justify-end my-5'>
                        <div className='w-9 h-9 rounded-full text-white bg-linear-to-r from-[#4F39F6]/80 to-[#9514FA]/80 flex justify-center items-center'>
                            <p>01</p>
                        </div>
                   </div>

                    <div className='text-center  space-y-3 '>
                        <div className='flex justify-center'>
                            <div className='flex justify-center items-center  bg-white rounded-full h-15 w-15 p-3'><img src={img1} alt="" className=' ' /></div>
                        </div>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                    
                </div>


                <div className='bg-base-300 p-8 mt-9 rounded-2xl'>

                    <div className='flex justify-end my-5'>
                        <div className='w-9 h-9 rounded-full text-white bg-linear-to-r from-[#4F39F6]/80 to-[#9514FA]/80 flex justify-center items-center'>
                            <p>01</p>
                        </div>
                   </div>

                    <div className='text-center  space-y-3 '>
                        <div className='flex justify-center'>
                            <div className='flex justify-center items-center  bg-white rounded-full h-15 w-15 p-3'><img src={img2} alt="" className=' ' /></div>
                        </div>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                    
                </div>

                <div className='bg-base-300 p-8 mt-9 rounded-2xl'>

                    <div className='flex justify-end my-5'>
                        <div className='w-9 h-9 rounded-full text-white bg-linear-to-r from-[#4F39F6]/80 to-[#9514FA]/80 flex justify-center items-center'>
                            <p>01</p>
                        </div>
                   </div>

                    <div className='text-center  space-y-3 '>
                        <div className='flex justify-center'>
                            <div className='flex justify-center items-center  bg-white rounded-full h-15 w-15 p-3'><img src={img3} alt="" className=' ' /></div>
                        </div>
                        <h3 className='text-2xl font-bold'>Create Account</h3>
                        <p className='text-center text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                    </div>
                    
                </div>
                

            </div>
        </div>
    );
};

export default Getstart;