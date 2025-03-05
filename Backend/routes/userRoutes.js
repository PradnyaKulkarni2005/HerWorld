const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });//Creates a new User object using the Mongoose model.
    //This object will be saved in the MongoDB database.
    await newUser.save(); //.save() stores the new user in the MongoDB database.
    //await ensures the database operation completes before moving forward.
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error registering user" });
  }
});

module.exports = router;
