require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

// Import routes
const mentorRoutes = require('./routes/mentorRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/mentors', mentorRoutes);
app.use('/api/auth', authRoutes);

// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Backend is running!' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Force port to 5007
const PORT = 5009;
console.log('Using port:', PORT);

// Connect to database and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Failed to connect to database:', err);
    process.exit(1);
});
