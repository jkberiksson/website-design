import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      exit={{ y: '-100%' }}
      transition={{ duration: 0.5 }}
      className='bg-black w-screen h-screen text-white text-9xl p-4 flex flex-col justify-between items-end'>
      <div className='overflow-hidden'>
        <Letter letter={1} delay={3.1} />
        <Letter letter={0} delay={3.3} />
        <Letter letter={0} delay={3.5} />
      </div>
      <div className='overflow-hidden'>
        <Letter letter={8} delay={2.4} />
        <Letter letter={2} delay={2.6} />
      </div>
      <div className='overflow-hidden'>
        <Letter letter={4} delay={1.7} />
        <Letter letter={9} delay={1.9} />
      </div>
      <div className='overflow-hidden'>
        <Letter letter={1} delay={1} />
        <Letter letter={5} delay={1.2} />
      </div>
      <div className='overflow-hidden'>
        <Letter letter={0} delay={0.5} />
      </div>
    </motion.div>
  );
};

const Letter = ({ delay, letter }) => {
  return (
    <motion.span
      initial={{ y: '100%' }}
      animate={{ y: '-100%' }}
      transition={{ duration: 0.7, delay: delay }}
      className=' inline-block'>
      {letter}
    </motion.span>
  );
};

export default Loader;
