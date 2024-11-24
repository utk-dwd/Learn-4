import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function UserDetails() {
    const{name} = useParams();
    const navigate = useNavigate();
    const GoBackHandler = () => {
        // navigate("/user");
        navigate(-1);
    }


  return (
    <div className='bg-zinc-100  mt-10'>
    <h1 className='text-5xl text-red-300 bg-zinc-100'>Hello!</h1>
    <h1 className='text-3xl'>{name}  </h1>
    <button onClick={GoBackHandler}  className='mt-5 p-2 text-white bg-blue-600 rounded-md'>Go back</button>
</div>
  )
}

export default UserDetails