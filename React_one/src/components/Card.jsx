import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFireAlt } from "react-icons/fa";
import { MdCasino } from "react-icons/md";
import { motion } from "framer-motion"
import React from 'react'

function Card({width, start, para, hover="false"}) {
  return (
    <motion.div whileHover={{backgroundColor: hover === "true" && "#7443ff", padding: "25px"}} className= {`bg-zinc-800 rounded-xl p-5 ${width} min-h-[30rem] flex flex-col justify-between`}>
        <div>
            <div className='w-full flex items-center justify-between'>
                <h3>
                    One Heading
                </h3>
                < FaLongArrowAltRight />
            </div>
            <h1 className="text-3xl font-medium mt-5">LET'S CONNECT</h1>
        </div>
        <div className="down w-full">
            {   
                start === true && (
                    <>
                        <h1 className="text-8xl flex font-bold tracking-wider leading-none mb-5">START CASINO <MdCasino/></h1>
                        <button className="rounded-full py-2 px-3 border-[1px] border-zinc-50 flex items-center gap-2 font-thin"> Let's GO <FaFireAlt/> </button>
                    </>
                )
            }

            {para && (
                <p className="text-sm text-zinc-500 font-medium">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            )}
            
        </div>
    </motion.div>
  )
}

export default Card
