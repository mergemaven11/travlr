const express = require("express");
const router = express.Router();

const tripsController = require("../controllers/trips");

// Base /api route
router.get('/', (req, res) => {
  res.json({ message: 'API root: use /api/trips or /api/trips/:tripCode' });
});

// /api/trips
router
  .route("/trips")
  .get(tripsController.tripsList)
  .post(tripsController.tripsAddTrip);

// /api/trips/:tripCode
router
  .route("/trips/:tripCode")
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip)

module.exports = router;
