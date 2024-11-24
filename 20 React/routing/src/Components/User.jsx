import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='bg-zinc-100 w-1/2 m-auto mt-10'>
        <h1 className='text-5xl text-red-300 bg-zinc-100'>User </h1>
        <div className='flex w-1/2 flex-col '>
          <Link className='p-3 bg-red-200 text-2xl mb-3 hover:bg-red-500' to="/user/utk">Utk</Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3  hover:bg-red-500' to="/user/dwd">Dwd </Link>
          <Link className='p-3 bg-red-200 text-2xl mb-3  hover:bg-red-500' to="/user/utkarsh"> Utkarsh</Link>
        </div>
        <button className='mt-5 p-2 text-white bg-blue-600 rounded-md'>Explore more</button>

        <Outlet />  
        {/* Agar is component ka koi child hai to wo is omponent ke alwa kidr khulega to wo idhr hi khulelgla */}
    
    </div>
  )
}

export default User