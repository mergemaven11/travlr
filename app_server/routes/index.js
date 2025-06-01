const express = require('express');
const router = express.Router();


// Redirect root to /travel
router.get('/', (req, res) => {
  res.redirect('/travel');
});

const travelController = require('../controllers/travel');
const roomsController = require('../controllers/rooms');

router.get('/travel', travelController.travel);
router.get('/rooms', roomsController.roomsPage); 

module.exports = router;
