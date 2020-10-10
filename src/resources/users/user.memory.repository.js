const users = [];

const getAll = async () => users;

const getById = async id => users.filter(user => user.id === id)[0];

const create = async user => {
  users.push(user);
  return getById(user.id);
};

const updateById = async (id, { name, login, password }) => {
  const user = await getById(id);
  user.name = name;
  user.login = login;
  user.password = password;
  return getById(id);
};

const deleteById = async id => {
  const index = users.findIndex(user => user.id === id);
  users.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, updateById, deleteById };
