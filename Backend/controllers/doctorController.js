// Import necessary modules and models
const express = require('express');

const Doctor = require('../models/DoctorModel'); // Import your Doctor model

// Register Doctor Controller
const createDoctor = async(req,res) => {
  try {
    // Extract data from the request body
    const {
      username,
      name,
      email,
      password,
      date_of_birth,
      hourly_rate
    } = req.body;

    // Create a new doctor record
    const newDoctor = new Doctor({
      username,
      name,
      email,
      password, // Hash the password before saving (use a library like bcrypt)
      date_of_birth,
      hourly_rate,
      patients:[]
    });

    // Save the new doctor to the database
    await newDoctor.save();

    res.status(201).json({ message: 'Doctor registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while registering the doctor' });
  }
};

// Implement other controllers (e.g., update profile, view profile, list patients, etc.) following a similar structure

module.exports={createDoctor}