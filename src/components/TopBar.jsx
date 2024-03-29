import React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate=useNavigate();
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1 navbar-start">
      <div role="tablist" className="tabs tabs-bordered">
  <a  role="tab" className="tab tab-bordered hover text-black-900 font-semibold"  
   onClick={()=>navigate("/")}>ALL
    </a> 
  <a role="tab"className="tab tab-bordered hover text-black-900 font-semibold"
  onClick={()=>navigate("/doc/FullStack")}>FULL STACK DEVELOPMENT
    </a> 
  <a role="tab" className="tab tab-bordered  hover text-black-900 font-semibold"
   onClick={()=>navigate("/doc/DataScince")}> DATA SCIENCE</a>
  
  <a role="tab"className="tab tab-bordered  hover text-black-900 font-semibold"
      onClick={()=>navigate("/doc/Cyber")}>CYBER SECURITY
  </a>
  <a role="tab" className="tab tab-bordered hover text-black-900 font-semibold"
      onClick={()=>navigate("/doc/Career")}>CAREER
  </a>
  </div>
   </div>
   </div>
  )
}

export default TopBar;