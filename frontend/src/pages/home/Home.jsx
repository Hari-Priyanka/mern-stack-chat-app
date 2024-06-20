import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className='flex bg-#111214 h-screen w-screen bg-opacity-10'>
       <div className={`transition-all duration-300 ${sidebarOpen ? 'w-full' : 'w-32 md:w-[350px]'} relative z-10`}>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className='flex-1 h-full'>
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;
