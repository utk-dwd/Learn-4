import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url: "https://i.postimg.cc/MG3cgcds/DogeBG.png", number: "$0.3381"},
        {url: "https://i.postimg.cc/MTccwWLz/Chillguy-BG.png", number: "$0.1641"},
        {url: "https://i.postimg.cc/rwLwHGcy/ShibaBG.png", number: "$0.00002258"},
        {url: "https://i.postimg.cc/bJKZN7Xk/BrettBG.png", number: "$0.13"},
        {url: "https://i.postimg.cc/jjxdxsLG/PenguBG.png", number: "$0.036"},
        {url: "https://i.postimg.cc/8PvCwK2n/pepeBG.png", number: "$0.0000202"}
    ]

  return (
    <div className='flex items-center'>
        {data.map((elem, index) => (
            <Stripe key={index} val = {elem} />
        ))} 
    </div>
  )
}

export default Stripes
