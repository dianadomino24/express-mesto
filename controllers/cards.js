const path = require('path');
const readFile = require('../utils/read-file');

const jsonDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readFile(jsonDataPath)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send({ message: `Ошибка считывания файла: ${err}` }));
};

module.exports = {
  getCards,
};
