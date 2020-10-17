const logger = require('../logger');
const { finished } = require('stream');
const { PORT } = require('../common/config');

module.exports = (req, res, next) => {
  const start = Date.now();
  const { method, url, query, body } = req;
  const bodyParams = body.password ? { ...body, password: '*****' } : body;

  // eslint-disable-next-line callback-return
  next();

  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;

    logger.info(
      `method: ${method}, url: http://localhost:${PORT}${url}, query: ${JSON.stringify(
        query
      )}, body: ${JSON.stringify(bodyParams)}, time: ${new Date(
        start
      ).toString()}, statusCode: ${statusCode}, duration: ${ms}ms`
    );
  });
};
