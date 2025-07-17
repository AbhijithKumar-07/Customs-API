import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import customerRoutes from './routes/customerRoutes.js';
import branchRoutes from './routes/branchRoutes.js';

// Load env vars
dotenv.config();

// Connect to MongoDB
connectDB();

// Init app
const app = express();

// Middlewares
app.use(express.json()); // to parse JSON bodies

// Routes
app.use('/customers', customerRoutes);
app.use('/branches', branchRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));