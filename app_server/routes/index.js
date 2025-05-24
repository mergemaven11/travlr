const express = require('express');
const router = express.Router();
const main = require('../controllers/main');

router.get('/', main.index);
router.get('/about', main.about);
router.get('/contact', main.contact);
router.get('/meals', main.meals);
router.get('/news', main.news);
router.get('/rooms', main.rooms);
router.get('/travel', main.travel);

module.exports = router;
