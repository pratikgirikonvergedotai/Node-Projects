require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
// import middleware and router
const mainRouter = require('./routes/main');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(express.static('./public'));
app.use(express.json());

// router for /api/v1
app.use('/api/v1', mainRouter);

// middleware for custom error handler for 404 and route
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

// connecting to db and only then starting server
const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
