const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const getById = id => boardsRepo.getById(id);

const create = board => boardsRepo.create(board);

const updateById = (id, obj) => boardsRepo.updateById(id, obj);

const deleteById = id => boardsRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
