import React from 'react'
import GenderCheckBox from './GenderCheckBox'

const SignUp = () => {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="h-full w-full p-6 bg-gray-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className='text-3xl mb-4 font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-yellow-500'> ChatApp</span>
                </h1>
                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input type='text' placeholder='John Doe' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type='text' placeholder='johndoe' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type='password' placeholder='Enter Password' className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input type='password' placeholder='Confirm Password' className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckBox />
                    <a href='#' className='text-sm hover:underline hover:text-yellow-600 m-4 mx-0 inline-block'>
                        Already have an account? Login Now
                    </a>
                    <div>
                        <button className='btn btn-block btn-outline btn-warning btn-md mt-4'>SignUp</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignUp;