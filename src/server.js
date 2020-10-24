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
    mongoose.connection.db.dropDatabase();
    console.log('Connected to mongo DB');

    app.listen(PORT, () =>
      console.log(`App is running on http://localhost:${PORT}
      !!!!
      Инфа для проверяющих:
      Старая реализация из проекта не удалялась! Просто изменены пути к файлам с новой реализацией.
      Новую реализацию моделей смотреть в файлах с окончанием .mongoose.model.js, a не .model.js
      Новую реализацию репозиториев смотреть в файлах с окончанием .mongoose.repository.js
      Не перепутайте) Спасибо)
      !!!!`)
    );
  } catch (err) {
    console.log(err);
  }
}

run();
