// run only once to populate database
require('dotenv').config()

// importing connection and models
const connectDB = require('./db/connect')
const Product = require('./models/product')
// importing data from json file
const jsonProducts = require('./products.json')

const start = async () => {
  try {
    await connectDB(process.env.DATABASE_URI)
    // first delete every entries from database.
    await Product.deleteMany()
    // then create new entries 
    await Product.create(jsonProducts)
    console.log('Success!!!!')
  } catch (error) {
    console.log(error)
  }
}

start()
