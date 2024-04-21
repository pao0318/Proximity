import React, { useState } from 'react';
import { Card, CardHeader, CardContent, TextField, Button, Box } from '@mui/material';

const SignupBuyer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLocationFetch = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setFormData({
          ...formData,
          location: `Latitude: ${latitude}, Longitude: ${longitude}`
        });
      }, (error) => {
        console.error('Error getting location:', error);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add form submission logic here
    console.log(formData);
  };

  return (
    <Card>
      <CardHeader
        title="Welcome to Future Shopping"
        titleTypographyProps={{ variant: 'h4' }}
        className="text-center"
      />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            name="location"
            label="Location (from GPS)"
            variant="outlined"
            fullWidth
            value={formData.location}
            onChange={handleChange}
            margin="normal"
          />
          <Box mt={2} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
              onClick={handleLocationFetch}
            >
              Get Location
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default SignupBuyer;
