import React from 'react'
import { MainBar } from '../components/MainBar'

 const AllPages = () => {
    const data =[
      {
        name :"How to Hire a Full-Stack Web Developer in 2024",
        img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/feature-image-How-to-Hire-a-Full-Stack-Developer.webp",
    },
    {
      name :"12 Real-World Data Science Examples: Power Of Data Science",
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
  },
  {
    name :"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    img: "https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
},
{
  name :"Top 5 Motion Graphics Projects for Your Upgraded Career",
  img: "https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature.png",
}
  ]
  return (
    <div className='app'>
        {
            data.map((card,idx)=>(
                <MainBar key={idx}
               name={card.name}
               img={card.img}
               />
            ))
        }
    </div>
  )
}
export default AllPages;
