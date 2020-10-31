const mongoose = require('mongoose');
const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');

async function run() {
  try {
    await mongoose.connect(MONGO_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    await mongoose.connection.db.dropDatabase();
    console.log('Connected to mongo DB');
    await mongoose.connection.db.collection('users').insertOne({
      name: 'admin',
      login: 'admin',
      password: '$2b$10$UQKYyr/VewBQVfP9Q7fbTuSY/REQLC3lI8y9FVix0ABEhz8lhHZoO'
    });
    console.log('Add admin');
    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
}

run();
