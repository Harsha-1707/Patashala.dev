const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Stats endpoint - returns platform statistics
app.get('/api/stats', (req, res) => {
  res.json({
    projects: 50,
    learners: 1200,
    completionRate: 94,
    activeCourses: 12
  });
});

// Contact endpoint - handles contact form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, requirement, message } = req.body;

  // Basic validation
  if (!name || !email || !requirement || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'All fields are required' 
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Invalid email address' 
    });
  }

  // Log submission (in production, send email or save to database)
  console.log('Contact form submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Requirement:', requirement);
  console.log('Message:', message);
  console.log('---');

  // Simulate processing delay
  setTimeout(() => {
    res.json({ 
      success: true, 
      message: 'Thank you for reaching out! We will get back to you within 24 hours.' 
    });
  }, 500);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
  console.log(`Stats endpoint: http://localhost:${PORT}/api/stats`);
  console.log(`Contact endpoint: http://localhost:${PORT}/api/contact`);
});
