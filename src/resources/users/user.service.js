const usersRepo = require('./user.memory.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const updateById = (id, obj) => usersRepo.updateById(id, obj);

const deleteById = async id => {
  const isDeleted = await usersRepo.deleteById(id);
  if (isDeleted) tasksService.unassignAll(id);
  return isDeleted;
};

module.exports = { getAll, getById, create, updateById, deleteById };
