import express from 'express';
import {
  getCryptoPrices,
  addToWatchlist,
  removeFromWatchlist,
  createPriceAlert,
  getWatchlist
} from '../controllers/cryptoController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/prices', getCryptoPrices);
router.get('/watchlist', protect, getWatchlist);
router.post('/watchlist', protect, addToWatchlist);
router.delete('/watchlist/:cryptoId', protect, removeFromWatchlist);
router.post('/alerts', protect, createPriceAlert);

export default router;