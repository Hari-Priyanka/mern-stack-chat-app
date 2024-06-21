import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom';
import useSignup from './../../hooks/useSignup';

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: '',
    });

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
        setInputs({...inputs, gender})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await signup(inputs);
    };
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div className="h-full w-full p-6 bg-gray-400 rounded-md bg-clip-padding 
    backdrop-filter backdrop-blur-sm bg-opacity-10">
                <h1 className='text-3xl mb-4 font-semibold text-center text-gray-300'>
                    SignUp
                    <span className='text-yellow-500'> ChatApp</span>
                </h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Full Name</span>
                        </label>
                        <input 
                        type='text' 
                        placeholder='John Doe'
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input 
                        type='text' 
                        placeholder='johndoe'
                        value={inputs.userName}
                        onChange={(e) => setInputs({...inputs, userName: e.target.value})} 
                        className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input 
                        type='password' 
                        placeholder='Enter Password' 
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        className='w-full input input-bordered h-10' />
                    </div>
                    <div>
                        <label className='label p-2 mt-2'>
                            <span className='text-base label-text'>Confirm Password</span>
                        </label>
                        <input 
                        type='password' 
                        placeholder='Confirm Password' 
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        className='w-full input input-bordered h-10' />
                    </div>
                    <GenderCheckBox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender}/>
                    <Link to='/login' className='text-sm hover:underline hover:text-yellow-600 m-4 mx-0 inline-block'>
                        Already have an account? Login Now
                    </Link>
                    <div>
                        <button 
                        type='submit' 
                        className='btn btn-block btn-outline btn-warning btn-md mt-4'
                        disabled={loading}>
                            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SignUp;