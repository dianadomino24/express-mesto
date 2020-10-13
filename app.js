const express = require('express');

const app = express();
const { PORT = 3000 } = process.env;
const path = require('path');
const usersRoutes = require('./routes/users');
const cardsRoutes = require('./routes/cards');

// раздаст статические файлы, собранные из прошлого проекта реактом
app.use(express.static(path.join(__dirname, 'public')));
// выдаст список пользователей, пользователя по id и карточки
app.use('/users', usersRoutes);
app.use('/cards', cardsRoutes);

// при обращении к несущ.адресу выдаст ошибку
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
