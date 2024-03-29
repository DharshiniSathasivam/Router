import React from 'react'
import { MainBar } from '../components/MainBar'

const CyberPages = () => {
  const data =[{
    name :"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
}]
  return (
    <div>
       {
          data.map((card,idx)=>(
            <MainBar key={idx}
            img={card.img} 
            name={card.name}
            />
          ))
        }

    </div>
  )
}

export default CyberPages