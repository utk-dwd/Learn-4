import React, { useState} from 'react';
import Card from "./Components/Card";
import Navbar from './Components/Navbar';

function App() {

  const data = [
    {image: "https://www.seedhemaut.com/wp-content/uploads/2024/07/Seedhe-Maut-Lunch-Break-Front-Cover-Art-4K-1-2048x2048.png", name:"Lunch-Break", artist: "Seedhe Maut", added:false},
    {image: "https://www.seedhemaut.com/wp-content/uploads/2024/07/Tofa-Hurrican-Seedhe-Maut-660x660.jpg", name:"Tohfa", artist: "Seedhe Maut", added:false},
    {image: "https://www.seedhemaut.com/wp-content/uploads/2021/07/01-Seedhe-Maut-Naamcheen-Naamcheen-mp3-image-660x660.jpg", name:"Naamcheen", artist: "Seedhe Maut", added:false},
    {image: "https://www.seedhemaut.com/wp-content/uploads/2021/07/AZR074-Nanchaku-Seedhe-Maut-MC-STAN-Artwork-660x660.jpg", name:"Nanchaku", artist: "Seedhe Maut", added:false},
    {image: "https://www.seedhemaut.com/wp-content/uploads/2021/10/AZR079-_%E0%A4%A8_-Seedhe-Maut-2048x2048.jpg", name:"न", artist: "Seedhe Maut", added:false},
  ];

  //React will only react to STATE 
  const [songData, setSongData] = useState(data);
  const handleClick = (index)=> {
    setSongData((prev)=> {
      return prev.map((item, itemindex)=> {
        if(itemindex === index) return {...item, added: !item.added};
        return item;
      })
    })

  }

  return (
    <>
    <div className='w-full h-screen bg-stone-950'>
      <Navbar data ={songData}/>
      <div className='px-20 flex gap-8 mt-20 flex-wrap'>
        {songData.map((obj, index)=>(
          <Card data={obj} handleClick={handleClick} index={index} key={index} />
        ))}
      </div>
      
    </div>

    </>
  )
}

export default App