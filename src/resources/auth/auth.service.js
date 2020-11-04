const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('../../common/config');
const usersRepo = require('../users/user.mongoose.repository');

const getToken = async credentials => {
  const user = await usersRepo.getByLogin(credentials.login);
  if (!user) return false;
  const isValidPass = await bcrypt.compare(credentials.password, user.password);
  if (!isValidPass) return false;
  const payload = { userId: user.userId, login: user.login };
  const token = jwt.sign(payload, JWT_SECRET_KEY);
  return token;
};

module.exports = { getToken };
