const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Pro = require('../models/Products');
const productController = require('../controllers/productController');

router.route('/').get(productController.getAllProduct).post(productController.createProduct);
router
  .route('/:id')
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
