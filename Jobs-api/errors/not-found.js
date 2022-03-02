const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

// handling 404 request error
class NotFoundError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

module.exports = NotFoundError;
