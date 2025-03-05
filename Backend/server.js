require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json()); // Parse JSON data
app.use(cors()); // Allow frontend to communicate with backend

// Connect Database
connectDB();

// Test Route
app.get('/', (req, res) => {
  res.send("API is running...");
});
const userRoutes = require('./routes/userRoutes');
const forumRoutes = require('./routes/forumRoutes');

app.use('/api/users', userRoutes);
app.use('/api/forum', forumRoutes);

// Port Configuration
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  .on('error', (err) => {
    console.error(`Server error: ${err.message}`);
  });
