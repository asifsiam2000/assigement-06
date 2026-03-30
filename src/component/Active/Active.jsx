import React from 'react';

const Active = () => {
    return (
        <div className='text-white my-10 bg-linear-to-r from-[#4F39F6]/90 to-[#9514FA]/80 '>
            <div className='mx-auto max-w-[1200px] px-20 py-10 gap-5 container flex flex-col md:flex-row justify-between items-center '>
                <div>
                <h2 className='text-4xl font-bold'>50K+</h2>
                <p>Active Users</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>200+</h2>
                <p>Premium Tools</p>
            </div>
            <div>
                <h2 className='text-4xl font-bold'>4.9</h2>
                <p>Rating</p>
            </div>
            </div>
        </div>
    );
};

export default Active;