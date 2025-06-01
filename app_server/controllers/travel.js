const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../../data/trips.json');

let trips = [];
try {
  const fileContent = fs.readFileSync(dataPath, 'utf8');
  trips = JSON.parse(fileContent);
} catch (err) {
  console.error('Error reading trips.json:', err.message);
}

const travel = (req, res) => {
  res.render('travel', {
    title: 'Travel Getaways',
    trips
  });
};

module.exports = {
  travel
};
