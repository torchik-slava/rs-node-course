const router = require('express').Router();
const Board = require('./board.mongoose.model');
const boardsService = require('./board.services');

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const boards = await boardsService.getAll();
      res.json(boards.map(Board.toResponse));
    } catch (error) {
      return next(error);
    }
  })
  .post(async (req, res, next) => {
    try {
      const board = await boardsService.create(
        new Board({
          title: req.body.title,
          columns: req.body.columns
        })
      );
      res.json(Board.toResponse(board));
    } catch (error) {
      return next(error);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const board = await boardsService.getById(req.params.id);
      if (!board) throw new Error('Not found');
      res.json(Board.toResponse(board));
    } catch (error) {
      return next(error);
    }
  })
  .put(async (req, res, next) => {
    try {
      const board = await boardsService.updateById(req.params.id, {
        title: req.body.title,
        columns: req.body.columns
      });
      res.json(Board.toResponse(board));
    } catch (error) {
      return next(error);
    }
  })
  .delete(async (req, res, next) => {
    try {
      await boardsService.deleteById(req.params.id);
      res.status(200).send('deleted!');
    } catch (error) {
      return next(error);
    }
  });

module.exports = router;
