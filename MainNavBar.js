import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route directly
import Home from './Home';
import About from './About';
import Contact from './Contact';
import SampleNavBar from './SampleNavBar';
import Registration from './../donar/Registration';
import DonorLogin from './../donar/DonarLogin';
import AdminLogin from '../admin/AdminLogin';
import DonarHome from '../donar/DonarHome';
import AdminHome from '../admin/AdminHome';
import AdminNavBar from '../admin/AdminNavBar';
import ViewDonars from '../admin/ViewDonars';

function MainNavBar() {
  return (
    <>
      <SampleNavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration/>} />
        <Route path="/donarlogin" element={<DonorLogin/>} />
        <Route path="/adminlogin" element={<AdminLogin/>} />
        <Route path='/donarhome' element={<DonarHome/>}/>
        <Route path='/adminhome' element={<AdminHome/>}/> 
       <Route path='/adminnavbar' element={<AdminNavBar/>}/>
       <Route path='/viewdonars' element={<ViewDonars/>}/> 
      </Routes>
    </>
  );
}

export default MainNavBar;
