const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    type: {
      type: String,
      trim: true,
      required: "Type is Required"
    },
  
    name: {
      type: String,
      trim: true,
      required: "Name is Required"
    },
  
    weight: {
      type: Number,
    },
  
    sets: {
      type: Number
    },
    reps: {
        type: Number
    },
    duration: {
        type: Number
    },
    distance: {
        type: Number
    }

  });
  
  const Workouts = mongoose.model("Workouts", WorkoutsSchema);
  
  module.exports = Workouts;
  