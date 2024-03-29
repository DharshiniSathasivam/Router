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
    img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
},
{
  name :"Top 5 Motion Graphics Projects for Your Upgraded Career",
  img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-How-to-Become-a-Web-Developer-%E2%80%93-Your-Web-Development-Career-Roadmap.webp",
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
