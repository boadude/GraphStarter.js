const HttpStatus = require('http-status-codes');

class Responses {
  static success(message = '') {
    const result = {
      code: HttpStatus.OK,
      success: true,
      message,
    };

    return result;
  }
}

module.exports = {
  Responses,
};
