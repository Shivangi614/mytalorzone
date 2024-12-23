const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid'); // Import the uuid package

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  category: { type: String },
  rating: Number,
  productId: { type: String, unique: true ,default: uuidv4 }, // Added productId field
  inStockValue: Number, // Available stock value
  soldStockValue: { type: Number, default: 0 }, // Number of items sold
  visibility: { type: String, default: 'on' } // Visibility field with default 'on'
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;



