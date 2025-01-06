import React, { useState } from 'react'
import { motion, useScroll,useMotionValueEvent } from "framer-motion";

function Work() {
    
    const [images, setImages ] = useState(
        [
            { url: "https://i.seadn.io/s/raw/files/3d38880b44def936413e0fb0e0ce29b2.jpg?auto=format&dpr=1&w=1000", top: "50%", left:"50%", isActive: false},
            { url: "https://i.seadn.io/s/raw/files/b65f8d52d636785a3c911dc7eec9d9f4.png?auto=format&dpr=1&w=1000", top: "56%", left:"44%", isActive: false},
            { url: "https://i.seadn.io/gcs/files/4a7aa5887fa1ba0982e1d2dcf0080dc3.png?auto=format&dpr=1&w=1000", top: "45%", left:"56%", isActive: false},
            { url: "https://i.seadn.io/s/raw/files/e9dacf4a93b1c9e770ad182da2d7380b.png?auto=format&dpr=1&w=1000", top: "60%", left:"53%", isActive: false},
            { url: "https://i.seadn.io/s/raw/files/d6c6fb630e588ad728e091134296b7ce.webp?auto=format&dpr=1&w=1000", top: "43%", left: "40%", isActive: false},
            { url: "https://i.seadn.io/s/raw/files/4f958fae48bcaf918f9e9c8d9106a655.png?auto=format&dpr=1&w=1000", top: "65%", left: "55%", isActive: false},
         
        ]
    )

    const { scrollYProgress } = useScroll();
    
    scrollYProgress.on("change", (data) => {

        function imagesShow(arr){
            setImages(prev => (
                prev.map((item, index) =>(
                    arr.indexOf(index) === -1 ? (
                        {...item, isActive: false}
                    )
                    : {...item, isActive: true}
                ))
            ))
        }

        switch(Math.floor(data*100)){
            case 0:
                imagesShow([]);
                break;
            case 3:
                imagesShow([0]);
                break;
            case 5:
                imagesShow([0, 1]);
                break;
            case 7:
                imagesShow([0, 1, 2]);
                break;
            case 8:
                imagesShow([0, 1, 2, 3]);
                break;
            case 9:
                imagesShow([0, 1, 2, 3, 4]);
                break;
            case 10:
                imagesShow([0, 1, 2, 3, 4, 5]);
                break;
        }
    })
  
    return (
    <div className='w-full'>
        <div className='max-w-screen-xl mx-auto text-center relative'>
            <h1 className='text-[11vw] leading-none font-bold select-none py-[12vw] font-def'>MEME COINS</h1>
            <div className='w-full h-full absolute top-0'>
                {images.map(
                    (elem, index) => 
                        elem.isActive && 
                            (<img key={index} 

                                className=' absolute w-60 -translate-x-[50%] -translate-y-[50%] rounded-lg'  
                                src={elem.url} 
                                alt=""  
                                style={{top: elem.top, left: elem.left}}
                            />
                    )
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Work 