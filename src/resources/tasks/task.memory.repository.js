let tasks = [];

const getAll = async boardId => tasks.filter(task => task.boardId === boardId);

const getById = async (boardId, id) =>
  tasks.filter(task => task.boardId === boardId && task.id === id)[0];

const create = async task => {
  tasks.push(task);
  return getById(task.boardId, task.id);
};

const updateById = async (boardId, id, reqData) => {
  const task = await getById(boardId, id);
  task.title = reqData.title;
  task.order = reqData.order;
  task.description = reqData.description;
  task.userId = reqData.userId;
  task.columnId = reqData.columnId;
  return getById(boardId, id);
};

const deleteById = async (boardId, id) => {
  const index = tasks.findIndex(
    task => task.boardId === boardId && task.id === id
  );
  tasks.splice(index, 1);
  return true;
};

const deleteAll = async boardId => {
  tasks = tasks.filter(task => task.boardId !== boardId);
  return tasks;
};

const unassignAll = async userId => {
  tasks.forEach(task => {
    if (task.userId === userId) task.userId = null;
  });
  return tasks;
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  deleteAll,
  unassignAll
};
