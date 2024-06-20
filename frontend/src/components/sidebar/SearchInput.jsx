import React from 'react';
import { FaSearch, FaPlus } from "react-icons/fa";

const SearchInput = () => {
    return (
        <form action="" className='relative flex items-center gap-2'>
            <input type='text' placeholder='Search...' className='input input-bordered rounded-md pl-10' />
            <FaSearch className='absolute left-4 top-4 text-gray-400' />
            <button type='submit' className='btn btn-outline btn-ghost text-white'>
                <FaPlus />
            </button>
        </form>
    )
};

export default SearchInput;
