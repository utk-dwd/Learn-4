import React from 'react'

function Stripe({val}) {
  return (
    <div className='w-[16.66%] h-24 px-10 border-t-2 border-b-2 border-r-2 border-zinc-600 flex items-center justify-between'>
        <img src={val.url} className='w-32 h-22'></img>
        <span className='font-semibold'> {val.number} </span>
    </div>
  )
}

export default Stripe