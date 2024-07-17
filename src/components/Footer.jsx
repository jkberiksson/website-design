import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
      className='flex justify-between border-t border-black py-5'>
      <div className=' flex gap-4 font-medium'>
        <div>Prev</div>
        <div>Next</div>
      </div>
      <div className=' flex gap-4 font-medium'>
        <div>Instagram</div>
        <div>Let´s talk</div>
      </div>
    </motion.footer>
  );
};

export default Footer;
