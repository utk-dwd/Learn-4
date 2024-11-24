import React, { useState} from 'react';
import axios from 'axios';
import { Link, Routes, Route } from 'react-router-dom';
import Show from './Components/Show';
import Home from './Components/Home';
import Services from './Components/Services';
import User from './Components/User';

function App() {

  const [user, setuser] = useState([
    {
      id:1,
      email:'John@gmail.com',
      username:'johnd',
      password:'m38rmF$',
      
    },
    {
      id:2,
      email:'Mohn@gmail.com',
      username:'Mohnd',
      password:'m38rmF$',
     
    },


  ])

  return (
    
    <div className='pt-[5%] pl-[5%]'>

     <nav className='flex justify-center gap-10'>
      <Link to="/">Home</Link>
      <Link to="/user">User</Link>
      <Link to="/services">Services</Link>
      <Link to="/show">Show</Link>

     </nav>

     <hr/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/services" element={<Services />} />
        <Route path="/show" element={<Show />} />
      </Routes>

    </div>
  )
}

export default App