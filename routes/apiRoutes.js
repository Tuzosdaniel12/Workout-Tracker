const router = require("express").Router();
const { Workouts } = require("../models");

router.get("/api/workouts", async (req, res) =>{
    try {
        const workout = await Workouts.find({});

        res.json(workout)

    } catch (error) {
        res.json(error);
    }
});

router.get("/api/workouts/range", async (req, res)=>{
    try {
        
        const rangeWorkouts = await Workouts.find({});

        res.json(rangeWorkouts)

    } catch (error) {

        res.json(error);
    }
})

router.put("/api/workouts/:id", async ({body, params}, res)=>{
   
    try {
        const updateWorkout = await Workouts.where({ _id: params.id }).update({exercises: body});
        console.log(updateWorkout)

        res.json(updateWorkout);

    } catch (error) {
        res.json(error);
    }
})

router.post("/api/workouts", async ({body}, res)=>{
    try {
        const createWorkout = await Workouts.create(body);
        res.json(createWorkout);
    } catch (error) {
        res.json(err);
    }
})

module.exports = router;