const Board = require('./board.mongoose.model');

const getAll = async () => Board.find({});

const getById = async id => Board.findById(id);

const create = async board => Board.create(board);

const updateById = async (id, { title, columns }) => {
  const filter = { _id: id };
  const update = { title, columns };
  return Board.findOneAndUpdate(filter, update);
};

const deleteById = async id => Board.deleteOne({ _id: id });

module.exports = { getAll, getById, create, updateById, deleteById };
