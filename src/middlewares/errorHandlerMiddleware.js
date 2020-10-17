const logger = require('../logger');

module.exports = (err, req, res, next) => {
  if (err) {
    switch (err.message) {
      case 'Not found':
        res.status(404).send('Not found');
        logger.error(err.message);
        break;
      default:
        res.status(500).send('Internal server error');
        logger.error('Internal server error! Something went wrong!');
    }
  }
  next();
};
