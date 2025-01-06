import {motion } from "framer-motion";
import React from 'react'

function Marquee({imagesurls, direction }) {
  return (
    <div className='flex w-full gap-5 whitespace-nowrap overflow-hidden'>
        <motion.div 
        initial={{x: direction === "left" ? "0" : "-100%"}} 
        animate = {{x: direction === "left" ? "-100%" : "0"}}  transition={{ease:"linear", duration: 15, repeat: Infinity}} 
        className=' flex-shrink-0 flex gap-40 pr-40'>
        
        
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="w-64"/>
          ))}
        </motion.div>
        <motion.div 
        initial={{x: direction === "left" ? "0" : "-100%"}} 
        animate = {{x: direction === "left" ? "-100%" : "0"}}  transition={{ease:"linear", duration: 15, repeat: Infinity}} 
        className=' flex-shrink-0 flex gap-40 pr-40'>
        
        
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="w-64"/>
          ))}
        </motion.div>
        
  
    </div>
  )
}

export default Marquee