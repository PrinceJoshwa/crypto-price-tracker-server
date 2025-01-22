// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cron from 'node-cron';
// import authRoutes from './routes/authRoutes.js';
// import cryptoRoutes from './routes/cryptoRoutes.js';
// import { updateCryptoPrices } from './controllers/cryptoController.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/crypto', cryptoRoutes);

// // Schedule crypto price updates every 5 minutes
// cron.schedule('*/5 * * * *', async () => {
//   console.log('Updating crypto prices...');
//   await updateCryptoPrices();
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cron from 'node-cron';

// import authRoutes from './routes/authRoutes.js';
// import cryptoRoutes from './routes/cryptoRoutes.js';
// import { updateCryptoPrices } from './controllers/cryptoController.js';

// dotenv.config();

// const app = express();

// // Middleware
// app.use(cors({
//   origin: ['http://localhost:5173', 'http://localhost:3000'], // Add your frontend URL
//   credentials: true
// }));
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/crypto', cryptoRoutes);

// // Schedule crypto price updates every 5 minutes
// cron.schedule('*/5 * * * *', async () => {
//   console.log('Updating crypto prices...');
//   await updateCryptoPrices();
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).json({
//     message: err.message || 'Internal Server Error'
//   });
// });

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((error) => console.error('MongoDB connection error:', error));

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cryptoRoutes from './routes/cryptoRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['https://crypto-price-tracker-client.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/crypto', cryptoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error'
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});