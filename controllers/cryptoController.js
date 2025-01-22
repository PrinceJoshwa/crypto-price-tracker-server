// import axios from 'axios';
// import asyncHandler from 'express-async-handler';
// import CryptoPrice from '../models/CryptoPrice.js';
// import User from '../models/User.js';

// // Update crypto prices in database
// export const updateCryptoPrices = async () => {
//   try {
//     const response = await axios.get(`${process.env.COINGECKO_API_URL}/coins/markets`, {
//       params: {
//         vs_currency: 'usd',
//         order: 'market_cap_desc',
//         per_page: 100,
//         sparkline: false
//       }
//     });

//     for (const crypto of response.data) {
//       await CryptoPrice.findOneAndUpdate(
//         { cryptoId: crypto.id },
//         {
//           name: crypto.name,
//           symbol: crypto.symbol,
//           currentPrice: crypto.current_price,
//           marketCap: crypto.market_cap,
//           priceChangePercentage24h: crypto.price_change_percentage_24h,
//           lastUpdated: new Date()
//         },
//         { upsert: true }
//       );
//     }
//   } catch (error) {
//     console.error('Error updating crypto prices:', error);
//   }
// };

// // Get all crypto prices
// export const getCryptoPrices = asyncHandler(async (req, res) => {
//   const cryptoPrices = await CryptoPrice.find().sort({ marketCap: -1 });
//   res.json(cryptoPrices);
// });

// // Add crypto to watchlist
// export const addToWatchlist = asyncHandler(async (req, res) => {
//   const { cryptoId } = req.body;
//   const user = await User.findById(req.user._id);

//   if (!user.watchlist.includes(cryptoId)) {
//     user.watchlist.push(cryptoId);
//     await user.save();
//   }

//   res.json(user.watchlist);
// });

// // Remove crypto from watchlist
// export const removeFromWatchlist = asyncHandler(async (req, res) => {
//   const { cryptoId } = req.params;
//   const user = await User.findById(req.user._id);

//   user.watchlist = user.watchlist.filter(id => id !== cryptoId);
//   await user.save();

//   res.json(user.watchlist);
// });

// // Create price alert
// export const createPriceAlert = asyncHandler(async (req, res) => {
//   const { cryptoId, price, condition } = req.body;
//   const user = await User.findById(req.user._id);

//   user.priceAlerts.push({
//     cryptoId,
//     price,
//     condition,
//     active: true
//   });

//   await user.save();
//   res.status(201).json(user.priceAlerts);
// });

// // Get user's watchlist
// export const getWatchlist = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id);
//   const watchlistCryptos = await CryptoPrice.find({
//     cryptoId: { $in: user.watchlist }
//   });
//   res.json(watchlistCryptos);
// });


import axios from 'axios';
import asyncHandler from 'express-async-handler';

// Get all crypto prices
export const getCryptoPrices = asyncHandler(async (req, res) => {
  try {
    const response = await axios.get(`${process.env.COINGECKO_API_URL}/coins/markets`, {
      params: {
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: 20,
        sparkline: false
      }
    });

    const transformedData = response.data.map(coin => ({
      cryptoId: coin.id,
      name: coin.name,
      symbol: coin.symbol,
      currentPrice: coin.current_price,
      image: coin.image,
      marketCap: coin.market_cap,
      priceChangePercentage24h: coin.price_change_percentage_24h
    }));

    res.json(transformedData);
  } catch (error) {
    console.error('Error fetching crypto prices:', error);
    res.status(500).json({ message: 'Error fetching crypto prices' });
  }
});

// Get watchlist
export const getWatchlist = asyncHandler(async (req, res) => {
  res.json([]);
});