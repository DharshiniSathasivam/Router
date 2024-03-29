import React from 'react'
import { MainBar } from '../components/MainBar'

const CareerPage = () => {
  const data = [{
    name :"Top 5 Motion Graphics Projects for Your Upgraded Career",
  img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-How-to-Become-a-Web-Developer-%E2%80%93-Your-Web-Development-Career-Roadmap.webp",
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