import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './table.css'

export default function ViewDonars() {
  const [donars, setDonars] = useState([]);

  const fetchDonars = async () => {
    try {
      const response = await axios.get('http://localhost:3149/viewdonars');
      setDonars(response.data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchDonars();
  }, []);

  const deleteDonars = async (email) => {
    try {
      await axios.delete(`http://localhost:3149/deletedonar/${email}`);
      fetchDonars();
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Donars</h1>
      
      <table border={1} align="center" style={{ width: 'auto', height: 'auto' }}>
          <thead>
            <tr>
              <th>Full Name</th>
              <th>Gender</th>
              <th>Date of Birth</th>
              <th>Email</th>
              <th>Location</th>
              <th>Contact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
  {Array.isArray(donars) && donars.length > 0 ? (
    donars.map((donar, index) => (
      <tr key={index}>
        <td>{donar.fullname}</td>
        <td>{donar.gender}</td>
        <td>{donar.dateofbirth}</td>
        <td>{donar.email}</td>
        <td>{donar.location}</td>
        <td>{donar.contact}</td>
        <td>
          <button onClick={() => deleteDonars(donar.email)} className='button'>Delete</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="7">Data Not Found</td>
    </tr>
  )}
</tbody>
        </table>
    </div>
  );
}