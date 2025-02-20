import React from 'react'
import Marquee from './Marquee'

function Marquees() {
    var images = [
        [   
            "https://i.postimg.cc/zGjHS2WY/MBonk.png",
            "https://i.postimg.cc/Zq5BfPFB/Mai16z.png",
            "https://i.postimg.cc/Vk1btPJF/MBrett.png",
            "https://i.postimg.cc/65CvTpp3/MDoge.png",
            "https://i.postimg.cc/Dm3nth9p/Mneiro.png",
            "https://i.postimg.cc/dQkdPBMG/Mfloki.png",
            "https://i.postimg.cc/jjxdxsLG/PenguBG.png",
            "https://i.postimg.cc/DZD2PLBT/MPepe.png",
            "https://i.postimg.cc/HxjYMB0z/Mpopcat.png",
            "https://i.postimg.cc/SKgQjw9j/MShib.png",
            "https://i.postimg.cc/g2q2bwkV/Mwif.png",
        ],
        [   
            "https://i.postimg.cc/dQkdPBMG/Mfloki.png",
            "https://i.postimg.cc/DZD2PLBT/MPepe.png",
            "https://i.postimg.cc/SKgQjw9j/MShib.png",
            "https://i.postimg.cc/g2q2bwkV/Mwif.png",
            "https://i.postimg.cc/HxjYMB0z/Mpopcat.png",
            "https://i.postimg.cc/DZD2PLBT/MPepe.png",
            "https://i.postimg.cc/65CvTpp3/MDoge.png",
            "https://i.postimg.cc/Dm3nth9p/Mneiro.png",
            "https://i.postimg.cc/Zq5BfPFB/Mai16z.png",
            "https://i.postimg.cc/zGjHS2WY/MBonk.png",
            "https://i.postimg.cc/Vk1btPJF/MBrett.png",
            
        ],
    ];

  return (
    <div className='py-20 mt-32'>
        {images.map((item,index) => <Marquee key={index} direction={index === 0? "left" : "right"} imagesurls={item} />)}
    </div>
  );
}

export default Marquees; 
