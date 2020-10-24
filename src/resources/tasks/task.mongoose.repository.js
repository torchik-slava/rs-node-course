const Task = require('./task.mongoose.model');

const getAll = async boardId => Task.find({ boardId });

const getById = async (boardId, id) => Task.findOne({ _id: id, boardId });

const create = async task => Task.create(task);

const updateById = async (boardId, id, reqData) => {
  const filter = { _id: id, boardId };
  const update = {
    title: reqData.title,
    order: reqData.order,
    description: reqData.description,
    userId: reqData.userId,
    columnId: reqData.columnId
  };
  return Task.findOneAndUpdate(filter, update);
};

const deleteById = async (boardId, id) => Task.deleteOne({ _id: id, boardId });

const deleteAll = async boardId => Task.deleteMany({ boardId });

const unassignAll = async userId => {
  return Task.updateMany({ userId }, { userId: null });
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
