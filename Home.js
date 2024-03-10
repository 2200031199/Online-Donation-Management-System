import React from 'react'
// import projectlogo from './projectlogo.jpg'
import  './home.css'
export default function Home() {
  return (
    <div className='home-page' align='center'>
      <div className='home-content'>
      <h2 align='center'><u>Online Donation Management System</u></h2><br/> 
      <h3>
      "Welcome to our Online Donation Management System, where generosity meets purpose! 
      </h3>
      <h3>
      Our home page is designed to provide you with a seamless and user-friendly experience,
      </h3>
      <h3>
      making it easy for you to contribute to meaningful causes. Explore our featured campaigns,
      </h3>
      <h3>
      learn about impactful projects, and discover ways to make a difference. With intuitive
      </h3>
      <h3>
      navigation and a secure platform, your journey towards philanthropy starts right here.
      </h3>
     
      {/* <img src={projectlogo} alt="projectlogo" width="50%"/> */}
      </div>
      
    </div>
  )
}
