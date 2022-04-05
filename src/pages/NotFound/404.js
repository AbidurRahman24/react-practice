import React from 'react';
import './404.css'
import sadImo from './images/notfound.svg'
const NotFound = () => {
    return (

        <div class="flex justify-center items-center h-screen text-center bg-slate-50 ">
            <div className='space-y-4'>
                <img className='text-gray-500 w-28 md:w-32 lg:w-40 2xl:w-64' style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={sadImo} alt='sad Imogi' />
                <h2 className='text-5xl text-gray-500'> <strong>404</strong> </h2>
                <h4 className='text-2xl text-gray-400'>Page not found</h4>
                <div>
                    <p className="text-base text-gray-500">The Page you are looking for doesn't exist or an other error occurred.</p>
                    <p className="text-base text-gray-500">Go back, or head over to ... to choose a new direction.</p>
                </div>
            </div>
        </div>

    );
};

export default NotFound;