const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  brand: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  scale: {
    type: String,
    required: true
  },
  gtlf_model: {
    type: String,
    required: true
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;