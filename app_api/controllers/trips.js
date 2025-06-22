const mongoose = require("mongoose");
const Trip = require("../models/travlr");
const Model = mongoose.model("trips");

// GET  /trips - list of all the trips 

const tripsList = async(req, res) => {
    const q = await Model 
    .find({})
    .exec();

    console.log(q);
    
    if(!q)
    {
        return res
        .status(404)
        .json(q);
    } else {
        return res
        .status(200)
        .json(q)
    }
};


const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({"code": req.params.tripCode })

    console.log(q)

    if(!q){
        return res 
        .status(404)
        .json(err)
    } else {
        return res
        .status(200)
        .json(q);
    }
}

const tripsAddTrip = async (req, res) => {
  try {
    // Create a new trip instance from the request body
    const newTrip = new Trip({
      code: req.body.code,
      name: req.body.name,
      length: req.body.length,
      start: req.body.start,
      resort: req.body.resort,
      perPerson: req.body.perPerson,
      image: req.body.image,
      description: req.body.description
    });

    // Save the new trip to the database
    const savedTrip = await newTrip.save();

    // If saving failed, send an error response
    if (!savedTrip) {
      return res.status(500).json({ message: 'Failed to save the trip' });
    }

    // Success: send the saved trip back with 201 Created
    return res.status(201).json(savedTrip);

  } catch (error) {
    // Catch any errors and send a 500 response
    console.error(error);
    return res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const tripsUpdateTrip = async (req, res) => {
  try {
    console.log(req.params);
    console.log(req.body);

    const updatedTrip = await Model.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true, runValidators: true } // Return updated doc & validate input
    ).exec();

    if (!updatedTrip) {
      // No trip found with that code
      return res.status(404).json({ message: `Trip with code ${req.params.tripCode} not found.` });
    }

    // Successfully updated, send the updated trip with 200 OK
    return res.status(200).json(updatedTrip);

  } catch (err) {
    console.error(err);
    // Server error or validation error
    return res.status(500).json({ message: 'Error updating trip', error: err.message });
  }
};


module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip

};