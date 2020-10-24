const tasksRepo = require('./task.mongoose.repository');

const getAll = boardId => tasksRepo.getAll(boardId);

const getById = (boardId, id) => tasksRepo.getById(boardId, id);

const create = task => tasksRepo.create(task);

const updateById = (boardId, id, obj) => tasksRepo.updateById(boardId, id, obj);

const deleteById = (boardId, id) => tasksRepo.deleteById(boardId, id);

const deleteAll = boardId => tasksRepo.deleteAll(boardId);

const unassignAll = userId => tasksRepo.unassignAll(userId);

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  deleteAll,
  unassignAll
};
