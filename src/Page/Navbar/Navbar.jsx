import { Avatar } from '@mui/material';
import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='container z-200 sticky left-0 right-0 top-0 py-3 px-5 w-full lg:px-10 flex justify-between items-center'>
            <p className='font-bold text-lg'>EduAssign</p>
            <div className='flex items-center gap-5'>
                <p>Siddhant</p>
                <Avatar sx={{ backgroundColor: "#c24dd0" }} className='bg-[#c24dd0]'>S</Avatar>
            </div>
        </div>
    );
}

export default Navbar;
