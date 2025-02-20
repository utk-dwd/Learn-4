import React from 'react'
import Button from './Button'


function Navbar() {
  return (
    <div className='max-w-screen-xl mx-auto p-3 flex items-center py-6 justify-between border-b-[2px] border-zinc-700'>
        <div className='nleft flex'>
          <img src="https://i.postimg.cc/44DcJ9Zq/Meme-Coins-Logo.png" alt='Logo' className='w-20' />
          <div className='links flex gap-14 ml-20'>
              {["Home", "About", "Docs", "", "Join"].map((elem, index) => (
                  elem.length === 0  ? <span key={index} className='w-[2px] h-7 bg-zinc-700'></span> : (<a key={index}  className='text-lg flex items-center gap-1' href='#'>
                    {index === 1 && (<span style={{boxShadow: "0 0 0.45em #DFC66D"}} className='inline-block w-1.5 h-1.5 bg-yellow-600 rounded-full'></span>)}
                    {elem}
                </a>)               
              ))}
          </div>
        </div>
        <Button />
    </div>
  )
}

export default Navbar
