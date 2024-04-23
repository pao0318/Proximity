import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, TextField, Button, Box } from '@mui/material';

const SignupBuyer = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/api/auth/signupbuyer/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        name: formData.name,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        location: formData.location
      }),
    });
    const json = await response.json();
    console.log('formdata', formData)
    if (json.success) {
      localStorage.setItem("email", json.savedBuyer.email);
      navigate("/login");
    }
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
            name="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            value={formData.password}
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
          <Button
              variant="outlined"
              color="secondary"
              style={{ marginLeft: '10px' }}
              onClick={handleLocationFetch}
            >
              Get Location
            </Button>
          <Box mt={2} display="flex" justifyContent="center">
            <Button type="submit" variant="contained" color="primary">
              Sign Up
            </Button>
            
          </Box>
        </form>
        <div className="d-flex align-items-center justify-content-center pb-4">
                <p className="mb-0 me-2">Already have an account?</p>
                <Link
                  type="button"
                  className="btn btn-outline-danger"
                  to="/login"
                  role="button"
                >
                  Login
                </Link>
              </div>
      </CardContent>
    </Card>
  );
};

export default SignupBuyer;