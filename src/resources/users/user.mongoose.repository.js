const User = require('./user.mongoose.model');

const getAll = async () => User.find({});

const getById = async id => User.findById(id);

const create = async user => User.create(user);

const updateById = async (id, { name, login, password }) => {
  const filter = { _id: id };
  const update = { name, login, password };
  return User.findOneAndUpdate(filter, update);
};

const deleteById = async id => User.deleteOne({ _id: id });

module.exports = { getAll, getById, create, updateById, deleteById };
