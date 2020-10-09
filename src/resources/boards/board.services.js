const boardsRepo = require('./board.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const create = board => boardsRepo.create(board);

const updateById = (id, obj) => boardsRepo.updateById(id, obj);

const deleteById = async id => {
  const isDeleted = await boardsRepo.deleteById(id);
  if (isDeleted) tasksService.deleteAll(id);
  return isDeleted;
};

module.exports = { getAll, getById, create, updateById, deleteById };
