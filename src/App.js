import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Loader from './components/Loader';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
    const [showLoader, setShowLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowLoader(false);
        }, 4000);
    }, []);
    return (
        <AnimatePresence mode='wait'>
            {showLoader ? (
                <div className='overflow-hidden'>
                    <Loader key='loader' />
                </div>
            ) : (
                <motion.div
                    key='main-content'
                    className='max-w-[1600px] mx-auto h-[100dvh] px-6 flex flex-col justify-between overflow-hidden'>
                    <Header />
                    <Home />
                    <Footer />
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default App;
