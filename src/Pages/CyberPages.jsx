import React from 'react'
import { MainBar } from '../components/MainBar'

const CyberPages = () => {
  const data =[{
    name :"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
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