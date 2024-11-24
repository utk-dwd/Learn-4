import React from 'react'

function Card({user, handleRemove, id}) {
  return (
  

      <div className='w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center justify-center p-2'>
      <div className=' image w-[3vw] h-[3vw] rounded-full bg-blue-800 overflow-hidden'>
        <img className='w-full h-full object-cover ' src={user.image} />
      </div>
      <h1 className='mt-1 text-xl font-semibold text-center leading-none'>{user.name} </h1>
      <h4 className='opacity-40'>{user.email}</h4>
      <p className=' mt-1 text-center text-xs font-semibold leading-1 tracking-tight' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores magnam sequi et.</p>
      <button onClick={()=> handleRemove(id)} className='px-3 py-1 bg-red-600 text-xs rounded-md font-semibold mt-5 text-white'> Remove it</button>
    </div>
    
  )
}

export default Card