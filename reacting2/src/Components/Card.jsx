import React from 'react'

function Card({data, handleClick, index}) {
    //destructuring data and getting name artist etc...

    const {image , artist, name, added} = data;

  return (
    <div className='w-60 bg-zinc-300 p-4 rounded-md flex gap-4 pb-8 relative'>
        <div className='w-20 h-20 rounded-md overflow-hidden'>
            <img className='w-full h-full object-cover' src={image} alt="H" />
        </div>
        <div>
            <h3 className='text-xl leading-none font-semibold'>{name}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
        <button onClick={()=> handleClick(index)} className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-red-700" : "bg-teal-700"} absolute bottom-0 left-1/2 translate-y-[50%] -translate-x-[50%] text-white text-xm rounded-full`}>
        {added === false ? "Add to Favourites" : "Added"}
        </button>
        
    </div>
  )
}

export default Card