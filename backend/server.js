const express = require("express");
const cors = require("cors")
const helmet = require('helmet')
const dotenv = require("dotenv")
const userRoutes = require("./routes/users.js")
const { errorHandler } = require("./middleware/errorHandlers.js")
const connectDB = require("./config/db.js")

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database connection
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});