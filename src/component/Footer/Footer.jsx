import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { FaSquareInstagram } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#101727]'>


            <div className='grid p-15 grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white'>
                <div className='space-y-4'>
                    <h2 className='text-2xl font-bold'>DigiTools</h2>
                    <p className='text-xs text-gray-500'>Premium digital tools for creators,  professionals, and businesses. Work smarter  with our suite of powerful tools.</p>
                </div>


                <div className='space-y-3'>
                    <h2 className='text-xl font-bold'>Product</h2>
                    <p className='text-xs text-gray-500'>Features</p>
                    <p className='text-xs text-gray-500'>Pricing</p>
                    <p className='text-xs text-gray-500'>Templates</p>
                    <p className='text-xs text-gray-500'>Integrations</p>
                </div>


                <div className='space-y-3'>
                    <h2 className='text-xl font-bold'>Company</h2>
                    <p className='text-xs text-gray-500'>About</p>
                    <p className='text-xs text-gray-500'>Blog</p>
                    <p className='text-xs text-gray-500'>Careers</p>
                    <p className='text-xs text-gray-500'>Press</p>
                </div>


                <div className='space-y-3'>
                    <h2 className='text-xl font-bold'>Resources</h2>
                    <p className='text-xs text-gray-500'>Documentation</p>
                    <p className='text-xs text-gray-500'>Help Center</p>
                    <p className='text-xs text-gray-500'>Community</p>
                    <p className='text-xs text-gray-500'>Contact</p>
                </div>


                <div className='space-y-3'>
                    <h2 className='text-xl font-bold'>Social Links</h2>
                    <div className='flex items-center gap-3'>
                        <div className='bg-base-300 w-10 h-10 flex justify-center items-center rounded-full text-black'>
                            <FaSquareInstagram></FaSquareInstagram>
                        </div>
                        <div className='bg-base-300 w-10 h-10 flex justify-center items-center rounded-full text-black'>
                            <FaFacebook></FaFacebook>
                        </div>
                        <div className='bg-base-300 w-10 h-10 flex justify-center items-center rounded-full text-black'>
                            <BsTwitterX></BsTwitterX>
                        </div>
                    </div>
                </div>


            </div>


             
            
            <div className='w-[93%] mx-auto container p'>
                <hr className='text-[#665353] shadow-2xl' />
                <div className='flex justify-between items-center p-5'>
                    <div>
                        <p class="text-gray-500 text-sm font-normal">
                          &copy; 2026 <span class="font-semibold text-gray-500">Digitools</span>. All rights reserved.
                        </p>
                    </div>
                    <div className='text-gray-500 flex justify-between items-center gap-3'>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookies</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;