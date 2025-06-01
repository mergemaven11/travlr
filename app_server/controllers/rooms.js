const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/rooms.json');

let rooms = [];
try {
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  rooms = JSON.parse(fileContent);
} catch (err) {
  console.error('Error reading rooms.json:', err.message);
}

const roomsPage = (req, res) => {
  res.render('rooms', {
    title: 'Rooms',
    rooms
  });
};

module.exports = {
  roomsPage
};
