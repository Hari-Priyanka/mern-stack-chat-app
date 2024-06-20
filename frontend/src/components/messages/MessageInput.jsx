import React from 'react';

const MessageInput = () => {
  return (
    <form className='p-2 m-2'>
        <div className='w-full flex gap-2'>
            <input type='text' placeholder='Send a message' className='p-2 border text-sm rounded-lg w-full bg-gray-700 border-gray-500 text-white'/>
            <button type='submit' className='btn btn-gray bg-gray-700'>
                Send
            </button>
        </div>
    </form>
  )
};

export default MessageInput;