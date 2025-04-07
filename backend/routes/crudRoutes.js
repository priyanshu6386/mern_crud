const express = require('express');
const multer = require('multer');
const path = require('path');
const { createItem, getItems, deleteItem } = require('../controllers/itemController');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});

const upload = multer({ storage });

router.post('/', upload.single('image'), createItem);
router.get('/', getItems);
router.delete('/:id', deleteItem);

module.exports = router;
