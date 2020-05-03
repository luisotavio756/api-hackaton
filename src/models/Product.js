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
  // [mongoose.SchemaTypes.Mixed]
  position: {
    type: Array,
    required: true
  },
  scale: {
    type: Array,
    required: true
  },
  path_gtlf: {
    type: String,
    required: true
  },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;