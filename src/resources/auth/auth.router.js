const router = require('express').Router();
const authService = require('./auth.service');

router.post('/', async (req, res, next) => {
  try {
    const token = await authService.getToken({
      login: req.body.login,
      password: req.body.password
    });
    if (!token) {
      throw new Error('Forbidden');
    }
    res.status(200).send({ token });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
