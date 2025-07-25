import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes'; // Tambahkan ini

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Basic route for testing
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Fullstack CRUD API',
    status: 'Server is running!',
  });
});

// API Routes
app.use('/api', routes); // Tambahkan ini

export default app;
