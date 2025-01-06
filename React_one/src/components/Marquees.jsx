import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var images = [
        [   
            "src/assets/MBonk.png",
            "src/assets/Mai16z.png",
            "src/assets/MBrett.png",
            "src/assets/MDoge.png",
            "src/assets/Mneiro.png",
            "src/assets/Mfloki.png",
            "src/assets/MPengu.png",
            "src/assets/MPepe.png",
            "src/assets/Mpopcat.png",
            "src/assets/MShib.png",
            "src/assets/Mwif.png",
        ],
        [   
            "src/assets/Mfloki.png",
            "src/assets/MPepe.png",
            "src/assets/MShib.png",
            "src/assets/Mwif.png",
            "src/assets/Mpopcat.png",
            "src/assets/MPepe.png",
            "src/assets/MDoge.png",
            "src/assets/Mneiro.png",
            "src/assets/Mai16z.png",
            "src/assets/MBonk.png",
            "src/assets/MPengu.png",
            
        ],
    ];

  return (
    <div className='py-20 mt-32'>
        {images.map((item,index) => <Marquee key={index} direction={index === 0? "left" : "right"} imagesurls={item} />)}
    </div>
  );
}

export default Marquees; 