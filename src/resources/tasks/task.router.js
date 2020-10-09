const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router
  .route('/')
  .get(async (req, res) => {
    const tasks = await tasksService.getAll(req.params.boardId);
    res.json(tasks.map(Task.toResponse));
  })
  .post(async (req, res) => {
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
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const task = await tasksService.getById(req.params.boardId, req.params.id);
    if (!task) res.status(404).send('Task not found');
    res.json(Task.toResponse(task));
  })
  .put(async (req, res) => {
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
  })
  .delete(async (req, res) => {
    await tasksService.deleteById(req.params.boardId, req.params.id);
    res.status(200).send('deleted!');
  });
module.exports = router;
