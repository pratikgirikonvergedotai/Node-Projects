const express = require('express')
const router = express.Router()

// importing controllers
const {
  getAllProducts,
  getAllProductsStatic,
} = require('../controllers/products')

// get route for '/'
router.route('/').get(getAllProducts)
// get route for '/static' 
router.route('/static').get(getAllProductsStatic)

module.exports = router
