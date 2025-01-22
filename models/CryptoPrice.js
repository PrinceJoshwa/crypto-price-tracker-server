import mongoose from 'mongoose';

const cryptoPriceSchema = new mongoose.Schema({
  cryptoId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  marketCap: {
    type: Number,
    required: true
  },
  priceChangePercentage24h: {
    type: Number,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('CryptoPrice', cryptoPriceSchema);