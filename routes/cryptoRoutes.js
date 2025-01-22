// import express from 'express';
// import { register, login, getUserProfile } from '../controllers/authController.js';
// import { protect } from '../middleware/authMiddleware.js';

// const router = express.Router();

// router.post('/register', register);
// router.post('/login', login);
// router.get('/profile', protect, getUserProfile);

// export default router;


import express from 'express';
import {
  getCryptoPrices,
  getWatchlist
} from '../controllers/cryptoController.js';

const router = express.Router();

// Public routes
router.get('/prices', getCryptoPrices);

export default router;