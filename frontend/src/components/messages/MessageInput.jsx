import React, { useState } from 'react';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState('');
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }
  return (
    <form 
    onSubmit={handleSubmit}
    className='p-2 m-2'>
        <div className='w-full flex gap-2'>
            <input 
            type='text' 
            placeholder='Send a message' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='p-2 border text-sm rounded-lg w-full bg-gray-700 border-gray-500 text-white'/>
            <button type='submit' className='btn btn-gray bg-gray-700'>
               {loading ? <div className='loading loading-spinner'></div> : "Send"}
            </button>
        </div>
    </form>
  )
};

export default MessageInput;