import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className='flex flex-col overflow-auto'>
      <Conversation />
      <div className='divider px-3 w-full'></div>
      <Conversation />
      <div className='divider px-3 w-full'></div> 
      <Conversation />
      <div className='divider px-3 w-full'></div> 
      <Conversation />
      <div className='divider px-3 w-full'></div> 
      <Conversation />
      <div className='divider px-3 w-full'></div>
    </div>
  );
};

export default Conversations;
