const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Item', itemSchema);
