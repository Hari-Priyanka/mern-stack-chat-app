import React from 'react';

const Conversation = () => {
    return (
        <div className={'flex gap-2 items-center justify-center p-2 py-1 cursor-pointer rounded-md hover:bg-gray-700'}>
            <div className='avatar online'>
                <div className='w-12 rounded-full'>
                    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='user avatar' />
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex flex-col justify-start gap-1'>
                    <p className='font-bold text-gray-200'>John Doe</p>
                    <p className='font-bolder overflow-hidden'>here goes the status message</p>
                </div>
            </div>
        </div>
    );
};

export default Conversation;
