import React from 'react'

function Card() {

  const data = [
    {image: 'https://images.unsplash.com/photo-1720048170996-40507a45c720?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name:"Amazon Basics" , description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, aperiam?", instock: true, 
    },

    {image: 'https://images.unsplash.com/photo-1719937206590-6cb10b099e0f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name:"Daily Objects" , description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, aperiam?", instock: false, },

    {image: 'https://images.unsplash.com/photo-1725085662412-14bd6f48a76b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' , name:"Apple", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, aperiam?", instock: false, }
  ]

  return (
    <div className='w-full h-screen bg-zinc-200 flex  items-center justify-center gap-10'>
      {data.map((elem, index)=>(
        <div key={index} className='w-52 bg-zinc-100 rounded-md overflow-hidden'>
        <div className='w-full h-32 bg-zinc-300'>
          <img className='w-full h-full object-cover' src={elem.image}></img>
        </div>
        <div className='w-full px-3 py-4'>
            <h2 className='font-semibold'>{elem.name}</h2>
            <p className='text-xs mt-5'>{elem.description}</p>
            <button className={`px-4 py-1 ${elem.instock ? 'bg-blue-600' : 'bg-red-600'} text-xs rounded text-zinc-100 mt-3`} >{elem.instock ? "In Stock" : "Out Of Stock"}</button>
        </div>
      </div>
      ))}
    </div>
  )
}

export default Card