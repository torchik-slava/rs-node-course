const router = require('express').Router({ mergeParams: true });
const Task = require('./task.mongoose.model');
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const tasks = await tasksService.getAll(req.params.boardId);
      res.json(tasks.map(Task.toResponse));
    } catch (error) {
      return next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const task = await tasksService.create(
        new Task({
          boardId: req.params.boardId,
          title: req.body.title,
          order: req.body.order,
          description: req.body.description,
          userId: req.body.userId,
          columnId: req.body.columnId
        })
      );
      res.json(Task.toResponse(task));
    } catch (error) {
      return next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const task = await tasksService.getById(
        req.params.boardId,
        req.params.id
      );
      if (!task) throw new Error('Not found');
      res.json(Task.toResponse(task));
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const task = await tasksService.updateById(
        req.params.boardId,
        req.params.id,
        {
          title: req.body.title,
          order: req.body.order,
          description: req.body.description,
          userId: req.body.userId,
          columnId: req.body.columnId
        }
      );
      res.json(Task.toResponse(task));
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await tasksService.deleteById(req.params.boardId, req.params.id);
      res.status(200).send('deleted!');
    } catch (error) {
      return next(error);
    }
  });
module.exports = router;
