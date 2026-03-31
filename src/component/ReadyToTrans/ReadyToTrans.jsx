import React from 'react';

const ReadyToTrans = () => {
    return (
        <div className='  my-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-15 text-center space-y-4'>
            <h2 className='text-white text-3xl font-bold'>Ready to Transform Your Workflow?</h2>
            <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
            <div className='flex justify-center items-center gap-4'>
                <button className='btn rounded-full text-[#'><span className='bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent'>Explore Products</span></button>
                <button className='btn btn-primary rounded-full text-base-400'>View Pricing</button>
            </div>
            <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
        </div>
    );
};

export default ReadyToTrans;