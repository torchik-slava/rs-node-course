const logger = require('../logger');

module.exports = (err, req, res, next) => {
  if (err) {
    switch (err.message) {
      case 'Not found':
        res.status(404).send('Not found');
        logger.error(err.message);
        break;
      case 'Forbidden':
        res.status(403).send('Incorrect login or password');
        logger.error(err.message);
        break;
      case 'Unauthorized':
        res.status(401).send('Unauthorized access! Please log in to system');
        logger.error(err.message);
        break;
      default:
        res.status(500).send('Internal server error');
        logger.error('Internal server error! Something went wrong!');
    }
  }
  next();
};
