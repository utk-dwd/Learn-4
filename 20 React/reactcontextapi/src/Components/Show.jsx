import React, { useEffect, useState } from 'react'
import axios from '../utils/axios';

function Show() {

    const [products, setproducts] = useState([]);



  const getproduct = () => {
    // const api = "https://fakestoreapi.com/products";
    
    axios
      .get("/products")
      .then((products) => {
        console.log(products);
        setproducts(products.data);
    })
    .catch((err)=> console.log(err))
  };

  useEffect(() => {
      getproduct()

  },[]);


  return (

    <>
         <button 
        onClick={getproduct}
        className='rounded px-5 py-2 bg-blue-500'
      >
        Get Product
      </button>

      <hr/>
        <ul>

    {products.length > 0 ? (
      products.map((p) => (
      <li key={p.id} className='rounded-md px-4 py-2 bg-blue-500 w-1/3 mt-10'>
        {p.title}
      </li> ))
    ) : (
        <h1> Loading... </h1>
      )}
  
    </ul>

    
    
    </>
    
    

  )
}

export default Show