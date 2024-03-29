import React from 'react'
import { MainBar } from '../components/MainBar'

const DataScincePage = () => {
  const data = [{
      name :"12 Real-World Data Science Examples: Power Of Data Science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
  },
  ]
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

export default DataScincePage