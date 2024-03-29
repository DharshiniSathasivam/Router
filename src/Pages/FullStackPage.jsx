import React from 'react'
import { MainBar } from '../components/MainBar'

const FullStackPage = () => {
  const data =[
    {
      name :"How to Hire a Full-Stack Web Developer in 2024",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-How-to-Hire-a-Full-Stack-Developer.webp",
  }]
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

export default FullStackPage