import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();

  return (
    <div className='flex flex-col overflow-auto'>
      {conversations.map((conversation, idx) => (
        <React.Fragment key={conversation._id}>
          <Conversation
            conversation={conversation}
            lastIdx={idx === conversations.length - 1}
          />
        </React.Fragment>
      ))}
      {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  );
};

export default Conversations;
