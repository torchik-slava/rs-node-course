const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    default: 'UserName'
  },
  login: {
    type: String,
    default: 'UserLogin'
  },
  password: {
    type: String,
    default: 'UserPassword'
  }
});

userSchema.statics.toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

module.exports = model('User', userSchema);
