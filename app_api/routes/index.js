const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// Base /api route
router.get('/', (req, res) => {
  res.json({ message: 'API root: use /api/trips or /api/trips/:tripCode' });
});

// /api/trips
router.route("/trips").get(tripsController.tripsList);

// /api/trips/:tripCode
router.route("/trips/:tripCode").get(tripsController.tripsFindByCode);

module.exports = router;
