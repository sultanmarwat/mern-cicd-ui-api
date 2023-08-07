// Import required libraries
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Set up Express app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using Mongoose
const dbURI = 'mongodb://mongo:27017/mydb'; // 'mongo' is the hostname defined in docker-compose.yml
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

// Define API routes
app.get('/api/data', (req, res) => {
  // Replace this with your actual data fetching logic from the database
  const data = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Adil' },
    { id: 2, name: 'Shoaib' },
  ];

  res.json(data);
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
