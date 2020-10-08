const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.create(
      new User({
        name: req.body.name,
        login: req.body.login,
        password: req.body.password
      })
    );
    res.json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await usersService.getById(req.params.id);
    res.json(User.toResponse(user));
  })
  .put(async (req, res) => {
    const user = await usersService.updateById(req.params.id, {
      name: req.body.name,
      login: req.body.login,
      password: req.body.password
    });
    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    await usersService.deleteById(req.params.id);
    res.status(200).send('deleted!');
  });

module.exports = router;
