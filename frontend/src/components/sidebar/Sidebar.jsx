import React from 'react';
import SearchInput from './SearchInput';
import Conversations from './Conversations';
import LogoutButton from './LogoutButton';

const Sidebar = () => {
  return (
    <div className={'p-4 border-r border-slate-400 flex flex-col h-full'}>
      <div className='flex items-center'>
       <SearchInput /> 
      </div>
      <div className='divider px-3'></div>
      <Conversations/>
      <div className='mt-auto'>
        <LogoutButton /> 
      </div>
    </div>
  );
};

export default Sidebar;
