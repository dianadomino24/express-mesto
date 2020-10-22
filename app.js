const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const { PORT = 3000 } = process.env;
// const path = require('path');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// // раздаст статические файлы, собранные из прошлого проекта реактом
// app.use(express.static(path.join(__dirname, 'public')));
// выдаст список пользователей, пользователя по id и карточки
app.use('/users', usersRoutes);
app.use('/cards', cardsRoutes);

app.use((req, res, next) => {
  req.user = {
    _id: '5f916a0010f31e3650563dcf',
  };

  next();
});
// при обращении к несущ.адресу выдаст ошибку
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
