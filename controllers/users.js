const path = require('path');
const readFile = require('../utils/read-file');
const User = require('../models/user');

const jsonDataPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: `Ошибка считывания файла: ${err}` }));
};

const getUser = (req, res) => {
  const { id } = req.params;
  readFile(jsonDataPath)
    .then((data) => {
      const userToFind = data.find((user) => user._id === id);
      return userToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      return res.send(user);
    })
    .catch((err) => res.status(500).send({ message: `Ошибка считывания файла: ${err}` }));
};

const createUser = (req, res) => {
  const { name, about, avatar } = req.body;
  console.log(req.user._id);
  User.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Ошибка создания пользователя: ${err}` }));
};

const updateUser = (req, res) => {
  const { name, about } = req.body;
  User.findByIdAndUpdate(req.params._id, { name, about }, // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Ошибка изменения данных пользователя: ${err}` }));
};

const updateAvatar = (req, res) => {
  const { avatar } = req.body;
  User.findByIdAndUpdate(req.params._id, { avatar }, // Передадим объект опций:
    {
      new: true, // обработчик then получит на вход обновлённую запись
      runValidators: true, // данные будут валидированы перед изменением
      upsert: true, // если пользователь не найден, он будет создан
    })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: `Ошибка изменения аватара пользователя: ${err}` }));
};

module.exports = {
  getUser,
  getUsers,
  createUser,
  updateUser,
  updateAvatar,
};
