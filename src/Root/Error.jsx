import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import React from 'react';

const Error = () => {
    return (
        <div className=' flex justify-center items-center mt-20'>
           <Link to='/'><Button className='bg-red-500'>Erorr</Button></Link>
        </div>
    );
};

export default Error;