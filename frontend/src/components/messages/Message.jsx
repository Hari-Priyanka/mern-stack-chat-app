import React from 'react';

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
            </div>
            <div className='chat-bubble mt-2 text-white bg-ghost-500'>Hi!!! What's Up?</div>
            <div className='chat-footer opacity-50 text-xs mt-2 gap-2 items-center'>12:42</div>
        </div>
    )
};

export default Message;