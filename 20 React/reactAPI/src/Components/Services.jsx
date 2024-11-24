import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'

function Services() {

    const [first, setFirst] = useState("this is normal data")
    const [second, setsecond] = useState("this is very large data")

    const getusers = () => {
      // const api = "/users";
      
      axios
        .get("/users")
        .then((users) => {
          console.log(users);
          
      })
      .catch((err)=> console.log(err))
    };
    


  useEffect(() => {
    getusers();
    console.log("Service Component is Created! ");

    return() => {
        console.log("Service Component is Unmounted! ");
    };
  }, [second]);
//Now the second component will rerender the whole page

  return (
    <div>
      <h2>{first}</h2>
      <button onClick={()=> setFirst("Normal data has been changed")} className='rounded-md bg-blue-500 px-4 py-2 mb-5' > Change normal data</button>

      <h2>{second}</h2>
      <button onClick={() => setsecond("large data has been changed")} className='rounded-md bg-red-500 px-4 py-2 mb-5' > Change large data</button>
    </div>
  )
}

//React reconsiliation and updating = ek component ko change krna
// Re-rendering krna mtlb page ko wapas se refresh krna


export default Services