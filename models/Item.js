const mongoose = require('mongoose');
const {
  ENUM_CATEGORY,
} = require('../utils/const');


const ItemSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  sku: {
    type: String,
    required: true,
  },
  category:{
      type:String,
      enum:ENUM_CATEGORY
  },
  image:{
      type: String,
  },
  description: {
    type: String,
  },
  price:{
      type: Number
  },
  brand:{
    type: String, 
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });




module.exports = mongoose.model('item', ItemSchema);
