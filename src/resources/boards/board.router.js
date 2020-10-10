const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.services');

router
  .route('/')
  .get(async (req, res) => {
    const boards = await boardsService.getAll();
    res.json(boards.map(Board.toResponse));
  })
  .post(async (req, res) => {
    const board = await boardsService.create(
      new Board({
        title: req.body.title,
        columns: req.body.columns
      })
    );
    res.json(Board.toResponse(board));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const board = await boardsService.getById(req.params.id);
    if (!board) return res.status(404).send('Board not found');
    res.json(Board.toResponse(board));
  })
  .put(async (req, res) => {
    const board = await boardsService.updateById(req.params.id, {
      title: req.body.title,
      columns: req.body.columns
    });
    res.json(Board.toResponse(board));
  })
  .delete(async (req, res) => {
    await boardsService.deleteById(req.params.id);
    res.status(200).send('deleted!');
  });

module.exports = router;
