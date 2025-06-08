// db.js should export a connected Mongoose instance
const mongoose = require('./db');
const Trip = require('./travlr'); // Trip schema
const fs = require('fs');
const path = require('path');

async function seedData() {
  try {
    const filePath = path.join(__dirname, '../../data/trips.json');
    let trips = JSON.parse(fs.readFileSync(filePath, "utf8"));

    trips = trips.map(trip => {
    const parsedDate = new Date(trip.start);
    if (isNaN(parsedDate)) {
        console.warn(`Warning: Invalid date found for trip code ${trip.code}: ${trip.start}`);
        trip.start = null; 
    } else {
        trip.start = parsedDate;
    }
    return trip;
    });

    // Clear and seed the DB
    await Trip.deleteMany({});
    await Trip.insertMany(trips);

    console.log("✅ Database seeded successfully.");
  } catch (err) {
    console.error("❌ Seeding failed:", err);
  } finally {
    await mongoose.connection.close(); 
    console.log("🔌 Mongoose connection closed.");
    process.exit(0);
  }
}

seedData();