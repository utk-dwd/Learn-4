import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-20 py-3 flex justify-between items-center'>
        <h3 className='text-zinc-300 text-2xl'>Test Music Site</h3>
        <div className='flex p-2 px-4 bg-red-700 text-white rounded-md text-sm gap-3'>
            <h3>Favourites</h3>
            <h4>{data.filter(item => item.added).length}</h4>
        </div>
    </div>
  )
}

export default Navbar