import data from '../utils/data';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Home = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const title = data[counter].title;

  return (
    <div className='h-full relative flex justify-center items-center'>
      <AnimatePresence mode='wait'>
        {title && (
          <motion.div key={title} className='absolute top-32 overflow-hidden'>
            {title.split('').map((letter, idx) => (
              <motion.span
                className='text-5xl font-medium inline-block'
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                exit={{ opacity: 0 }}>
                {letter}
              </motion.span>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='overflow-hidden flex gap-4'>
        {data.map((item, idx) => (
          <motion.img
            initial={{ y: idx % 2 === 0 ? '100%' : '-100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: idx === 0 ? 2 : 2 + idx * 0.3,
            }}
            className='object-cover w-[200px] h-[300px]'
            key={item.title}
            src={item.url}
            alt={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
