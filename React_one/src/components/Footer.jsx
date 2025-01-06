
import React from 'react'


function Footer() {
  return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto py-20 flex gap-32'>
            <div className='basis-1/2 relative'>
                <h1 className='text-2xl text-lime-700'>Designed by-</h1>
                <h1 className='text-[6rem] font-semibold leading-none text-zinc-200'>Utkarsh Dwivedi.</h1>
            </div>
            <div className='basis-1/3 flex gap-5s'>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>Socials</h4>
                    {["instagram", "twitter (X)", "LinkedIn"].map((item, index) =>  <a key={index} className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/3'>
                    <h4 className='mb-10 text-zinc-500'>More</h4>
                    {["About", "Services", "Whitepaper"].map((item, index) =>  <a key={index} className='block mt-3 text-zinc-600'>{item}</a>)}
                </div>
                <div className='basis-1/2 flex flex-col items-center'>
                    <p className='text-right'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, cupiditate.</p>
                    <img src='src/assets/Side.png' className='mt-5'></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer