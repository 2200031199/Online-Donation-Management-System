import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [formData, setFormData] = useState({
    fullname: '',
    gender: '',
    dateofbirth: '',
    email: '',
    password: '',
    location: '',
    contact: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  // const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3149/insertdonar', formData);
      if (response.status === 200) {
        setFormData({
          fullname: '',
          gender: '',
          dateofbirth: '',
          email: '',
          password: '',
          location: '',
          contact: ''
        });
        setMessage(response.data);
        setError('');
        // navigate('/otherpage'); // Redirect to another page
      }
    } catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  const isValidContact = (contact) => {
    return /^\d{10}$/.test(contact);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4">Donar Registration</Typography>
      {message ? <Typography variant="h6">{message}</Typography> : <Typography variant="h6">{error}</Typography>}
      <form onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullname"
          label="Full Name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="gender"
          select
          label="Gender"
          value={formData.gender}
          onChange={handleChange}
          SelectProps={{ native: true }}
        >
          <option value=""></option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </TextField>
        <TextField
          margin="normal"
          required
          fullWidth
          id="dateofbirth"
          label="Date of Birth"
          type="date"
          value={formData.dateofbirth}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          label="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="location"
          label="Location"
          value={formData.location}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="contact"
          label="Contact"
          type="number"
          value={formData.contact}
          onChange={handleChange}
          inputProps={{ pattern: "[0-9]{10}", title: "Please enter a 10-digit number" }}
        />
        <Button type="submit" variant="contained" fullWidth>Register</Button>
      </form>
    </Box>
  );
}