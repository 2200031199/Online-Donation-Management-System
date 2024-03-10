import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import ViewDonars from './ViewDonars'
import Home from '../main/Home'


export default function AdminNavBar() {
  return (
    <div align='center'>
      <nav>
        <ul>
            <Link to="/home">Home</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/viewdonars">View Donar</Link>&nbsp;&nbsp;&nbsp;
        </ul>
      </nav>
      <Routes>
        <Route path='/home' Component={Home} exact/>
        <Route path='/viewdonars' Component={ViewDonars} exact/>
      </Routes>
    </div>
  )
}
