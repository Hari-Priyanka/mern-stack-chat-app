import React, { useState } from 'react';
import { FaSearch, FaPlus } from "react-icons/fa";
import useConversation from '../../zustand/useConversation';
import useGetConversations from './../../hooks/useGetConversations';
import toast from 'react-hot-toast';

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversations();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!search) return;
        if (search.length < 3) {
            return toast.error('Enter at least 3 characters to search');
        }

        const conversation = conversations.find((c) =>
            c.fullName.toLowerCase().includes(search.toLowerCase())
        );

        if (conversation) {
            setSelectedConversation(conversation);
            setSearch('');
        } else {
            toast.error("No such user found");
        }
    };

    return (
        <form onSubmit={handleSubmit} className='relative flex items-center gap-2'>
            <input 
                type='text' 
                placeholder='Search...' 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='input input-bordered rounded-md pl-10' 
            />
            <FaSearch className='absolute left-4 top-4 text-gray-400' />
            <button type='submit' className='btn btn-outline btn-ghost text-white'>
                <FaPlus />
            </button>
        </form>
    );
};

export default SearchInput;
