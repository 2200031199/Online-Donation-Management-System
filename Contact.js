import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      if (response.status === 200) {
        alert('Your Response has been Noted');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Failed to submit contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert('Error submitting contact form. Please try again.');
    }
  };

  return (
    <div align="center">
      <h3 align="center">Contact Us</h3>
      <form align="center" onSubmit={handleSubmit} style={{ width: '50%', margin: 'auto' }}>
        <TextField
          margin="normal"
          required
          fullWidth
          name="name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="subject"
          label="Subject"
          value={formData.subject}
          onChange={handleChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="message"
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" fullWidth>Submit</Button>
      </form>
    </div>
  );
};

export default ContactUs;
