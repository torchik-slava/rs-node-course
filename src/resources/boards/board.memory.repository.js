const boards = [];

const getAll = async () => boards;

const getById = async id => boards.filter(board => board.id === id)[0];

const create = async board => {
  boards.push(board);
  return getById(board.id);
};

const updateById = async (id, { title, columns }) => {
  const board = await getById(id);
  board.title = title;
  board.password = columns;
  return getById(id);
};

const deleteById = async id => {
  const index = boards.findIndex(board => board.id === id);
  boards.splice(index, 1);
  return true;
};

module.exports = { getAll, getById, create, updateById, deleteById };
