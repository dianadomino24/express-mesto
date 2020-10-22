const path = require('path');
const readFile = require('../utils/read-file');
const Card = require('../models/card');

const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: `Ошибка считывания файла: ${err}` }));
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link })
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Ошибка создания карточки: ${err}` }));
};

const deleteCard = (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Ошибка удаления карточки: ${err}` }));
};

const putLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // добавить _id в массив, если его там нет
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Ошибка создания карточки: ${err}` }));
};
const deleteLike = (req, res) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // убрать _id из массива
    { new: true },
  )
    .then((card) => res.send({ data: card }))
    .catch((err) => res.status(500).send({ message: `Ошибка создания карточки: ${err}` }));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  putLike,
  deleteLike,
};
