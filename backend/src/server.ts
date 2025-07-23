import app from './app';
import connectDatabase from './config/database';

const PORT = process.env.PORT || 5000;

// Connect to database
connectDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
