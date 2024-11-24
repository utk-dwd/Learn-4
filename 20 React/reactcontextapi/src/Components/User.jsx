import React, {useContext} from 'react'
import Userdetails from './Userdetails'
import { Link } from 'react-router-dom'
import { userContext } from '../context/Context';

function User() {

  const {users, setusers} = useContext(userContext);

  return (
    <div>
      <h1 className='text-3xl'>User List</h1>
      <div className='mt-10'>
          {users.map((u) =>(
            <Link to={`/user/${u.id}`} className='bg-blue-100 p-3' >
              User Name
            </Link>))}
          

      </div>
    </div>
  ) 
}

export default User;