const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutsSchema = new Schema({
    day:{
        type: Date,
        default: Date.now
    },
    totalDuration: Number, 
    exercises: [
        {
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
            },
            
        },

    ]
  });
  
  WorkoutsSchema.methods.setTotalDuration = async function(collections) {

    this.totalDuration = parseInt(await collections.filter(collection => collection.exercises[0] !== undefined)
                                          .map(collection => collection.exercises[0]) 
                                          .reduce((accumulator, exercise) => accumulator + exercise.duration,0))

    return this.totalDuration
  };

  const Workouts = mongoose.model("Workouts", WorkoutsSchema);
  
  module.exports = Workouts;
  