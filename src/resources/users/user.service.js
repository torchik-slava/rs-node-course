const bcrypt = require('bcrypt');
const usersRepo = require('./user.mongoose.repository');
const tasksService = require('../tasks/task.service');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = async user => {
  const cryptPass = await bcrypt.hash(user.password, 10);
  return usersRepo.create({ ...user, password: cryptPass });
};

const updateById = (id, obj) => usersRepo.updateById(id, obj);

const deleteById = async id => {
  await usersRepo.deleteById(id);
  await tasksService.unassignAll(id);
};

module.exports = { getAll, getById, create, updateById, deleteById };
