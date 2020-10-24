const { Schema, model } = require('mongoose');

const boardSchema = new Schema({
  title: {
    type: String,
    default: 'Board title'
  },
  columns: {
    type: Array,
    default: []
  }
});

boardSchema.statics.toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

module.exports = model('Board', boardSchema);
