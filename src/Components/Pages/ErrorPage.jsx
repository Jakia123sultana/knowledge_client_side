import React from 'react';

import errorPic from '../../assets/error (1).jpg'
import { Link } from 'react-router';
const ErrorPage = () => {
    return (
        <div>
           
            <div className='flex justify-center mt-10'>
                <div className='w-64'>
                    <img src={errorPic} alt="" className='mx-auto'/>
                </div>
            </div>
            <div className='space-y-2 text-center'>
                <h1 className='text-lg font-bold text-red-600'>404-Page not found</h1>
                <p>Oops the Page you're looking for dose not exist</p>
                <Link to="/" className="btn rounded-xl px-5 py-1 bg-green-500 text-white">Go to Home</Link>

            </div>
        </div>
    );
};

export default ErrorPage;