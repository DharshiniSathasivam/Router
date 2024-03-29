import React from 'react'
import { MainBar } from '../components/MainBar'

const CareerPage = () => {
  const data = [{
    name :"Top 5 Motion Graphics Projects for Your Upgraded Career",
  img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature.png",
  }
  ]
  return (
    <div className='app'>
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

export default CareerPage