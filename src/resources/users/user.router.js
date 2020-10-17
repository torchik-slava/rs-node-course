const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const users = await usersService.getAll();
      res.json(users.map(User.toResponse));
    } catch (error) {
      return next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const user = await usersService.create(
        new User({
          name: req.body.name,
          login: req.body.login,
          password: req.body.password
        })
      );
      res.json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const user = await usersService.getById(req.params.id);
      if (!user) throw new Error('Not found');
      res.json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const user = await usersService.updateById(req.params.id, {
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
      });
      res.json(User.toResponse(user));
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await usersService.deleteById(req.params.id);
      res.status(200).send('deleted!');
    } catch (error) {
      return next(error);
    }
  });

module.exports = router;
