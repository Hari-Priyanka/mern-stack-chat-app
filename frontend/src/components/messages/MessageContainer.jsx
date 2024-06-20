import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';
import { TiMessages } from 'react-icons/ti';

const MessageContainer = () => {
  const noChatSelected = true;

  return (
    <>
      <div className='flex flex-col h-full w-full'>
        {noChatSelected ? (
          <NoChatSelected />
        ) : (
          <>
            <div className='bg-ghost-50 px-4 py-2 mb-2'>
              <div className={'flex gap-2 items-center justify-center p-2 py-1 cursor-pointer rounded-md hover:bg-gray-600'}>
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
            </div>
            <div className='divider my-0 py-0 h-1' />
            <Messages />
            <MessageInput />
          </>
        )}
      </div>
    </>
  )
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
      <div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
        <p>Welcome John Doe</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl md:text-6xl text-center' />
      </div>
    </div>
  )
}



