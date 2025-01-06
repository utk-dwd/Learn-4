import React from 'react'
import Stripe from './Stripe'

function Stripes() {

    var data = [
        {url: "src/assets/DogeBG.png", number: "$0.3381"},
        {url: "src/assets/ChillguyBG.png", number: "$0.1641"},
        {url: "src/assets/ShibaBG.png", number: "$0.00002258"},
        {url: "src/assets/BrettBG.png", number: "$0.13"},
        {url: "src/assets/PenguBG.png", number: "$0.036"},
        {url: "src/assets/pepeBG.png", number: "$0.0000202"}
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