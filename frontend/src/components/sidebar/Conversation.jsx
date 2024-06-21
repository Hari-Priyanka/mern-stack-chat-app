import React from 'react';
import useConversations from '../../zustand/useConversation';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversations();
  const { onlineUsers } = useSocketContext();

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);
  
  return (
    <>
      <div
        className={`flex gap-2 items-center justify-center p-2 py-1 cursor-pointer rounded-md hover:bg-gray-700
        ${isSelected ? "bg-gray-700" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className='w-12 rounded-full'>
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex flex-col justify-start gap-1'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <p className='font-bolder overflow-hidden'>here goes the status message</p>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='divider px-3 w-full'></div>}
    </>
  );
};

export default Conversation;
