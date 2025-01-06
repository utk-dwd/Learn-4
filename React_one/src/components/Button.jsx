import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Button({title = "Community"}) {
  return (
    <div className='w-fit gap-3 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-center justify-between'>
        <span className="text-sm font-medium">{title}</span>
        <FaArrowRightLong />
    </div>
  )
}

export default Button