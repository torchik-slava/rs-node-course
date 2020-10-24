const boardsRepo = require('./board.mongoose.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const create = board => boardsRepo.create(board);

const updateById = (id, obj) => boardsRepo.updateById(id, obj);

const deleteById = async id => {
  await boardsRepo.deleteById(id);
  await tasksService.deleteAll(id);
};

module.exports = { getAll, getById, create, updateById, deleteById };
