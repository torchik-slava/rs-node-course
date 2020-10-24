const { Schema, model } = require('mongoose');

const taskSchema = new Schema({
  title: {
    type: String,
    default: 'Task title'
  },
  order: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: 'Some description'
  },
  userId: {
    type: String,
    default: 'userId'
  },
  boardId: {
    type: String,
    default: 'boardId'
  },
  columnId: {
    type: String,
    default: 'columnId'
  }
});

taskSchema.statics.toResponse = task => {
  const { id, title, order, description, userId, boardId, columnId } = task;
  return { id, title, order, description, userId, boardId, columnId };
};

module.exports = model('Task', taskSchema);
