const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const getById = id => usersRepo.getById(id);

const create = user => usersRepo.create(user);

const updateById = (id, obj) => usersRepo.updateById(id, obj);

const deleteById = id => usersRepo.deleteById(id);

module.exports = { getAll, getById, create, updateById, deleteById };
