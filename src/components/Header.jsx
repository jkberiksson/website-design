import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    const title = 'Serenita';

    return (
        <motion.header
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex justify-between items-center border-b border-black py-5'>
            <div className='overflow-hidden'>
                {title.split('').map((letter, idx) => (
                    <motion.span
                        key={idx}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
                        className='inline-block font-semibold text-lg'>
                        {letter}
                    </motion.span>
                ))}
            </div>
            <nav className='hidden md:block'>
                <ul className='flex gap-5'>
                    <li className='font-medium'>Home</li>
                    <li className='font-medium'>About Us</li>
                    <li className='font-medium'>Contact Us</li>
                </ul>
            </nav>
            <div className='hidden md:block font-medium'>Search</div>
            <div className='hidden md:flex gap-5'>
                <div className='font-medium'>My cart [ 0 ]</div>
                <div className='font-light'>IT</div>
                <div className='font-light'>DE</div>
            </div>
            <div className=' md:hidden'>Menu</div>
        </motion.header>
    );
};

export default Header;
