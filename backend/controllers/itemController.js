const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  const { title, description } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : '';

  const item = new Item({ title, description, imageUrl });
  await item.save();
  res.status(201).json(item);
};

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).send();
};
