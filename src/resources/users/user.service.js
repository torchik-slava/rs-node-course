const usersRepo = require('./user.mongoose.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const updateById = (id, obj) => usersRepo.updateById(id, obj);

const deleteById = async id => {
  await usersRepo.deleteById(id);
  await tasksService.unassignAll(id);
};

module.exports = { getAll, getById, create, updateById, deleteById };
