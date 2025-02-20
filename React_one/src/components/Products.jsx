import React, { useState } from 'react';
import Product from './Product';
import { motion } from 'framer-motion';
import doge5 from '/src/assets/doge5.mp4';
import shiba1 from '/src/assets/Shiba1.mp4';
import pengu1 from '/src/assets/pengu1.mp4';
import brett1 from '/src/assets/brett1.mp4';
import pepe2 from '/src/assets/pepe2.mp4';


function Products() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [pos, setPos] = useState(0);

  const products = [
    { title: "DOGE COIN", description: "Dogecoin is a cryptocurrency featuring a Shiba Inu mascot, known for its lighthearted community, low fees, and tipping culture.", live: true, case: false, bgcolor: "#FFC107" },
    { title: "SHIBA INU", description: "Shiba Inu (SHIB) is a decentralized meme cryptocurrency built on Ethereum, designed for community engagement, utility, and ecosystem growth.", live: true, case: true, bgcolor: "#FF7A1C" },
    { title: "PENGU", description: "Brett Coin is a decentralized cryptocurrency enabling secure, fast, and transparent transactions, fostering community-driven innovation and financial inclusion.", live: true, case: true, bgcolor: "#81ABFF" },
    { title: "BRETT", description: "PENGU Coin is a fun, community-driven cryptocurrency combining meme culture with real utility, fostering decentralized finance and digital innovation.", live: true, case: false, bgcolor: "#00D0FF" },
    { title: "PEPE", description: "PEPE coin is a meme-based cryptocurrency inspired by the iconic Pepe the Frog, designed for fun, community engagement, and decentralized utility.", live: true, case: false, bgcolor: "#019E3F" },
  ];

  const mover = (index) => {
    setPos(index * 23);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="mt-32 relative">
      {products.map((val, index) => (
        <Product
          key={index}
          val={val}
          mover={mover}
          count={index}
          isHovered={hoveredIndex === index}
          onMouseLeave={handleMouseLeave}
        />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[32rem] h-[23rem] bg-white left-[44%] overflow-hidden rounded-xl"
        >
          <motion.div animate={{y: -pos + `rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className='w-full h-full rounded-2xl'>
              <video
                src={doge5}
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className='w-full h-full bg-sky-300'>
              <video
                src= {shiba1}
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className='w-full h-full bg-sky-500'>
              <video
                src= {pengu1}
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className='w-full h-full bg-sky-700'>
              <video
                src= {brett1}
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
            <motion.div animate={{y: -pos + `rem`}} 
            transition={{ease: [0.76, 0, 0.24, 1], duration: 0.5}}
            className='w-full h-full bg-sky-900'>
              <video
                src= {pepe2}
                loop
                autoPlay
                muted
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '10px',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
              />
            </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
