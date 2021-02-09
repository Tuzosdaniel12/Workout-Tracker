const router = require("express").Router();
const { Workouts } = require("../models");

router.get("/api/workouts", async (req, res) =>{
    try {
        const workout = 
            await Workouts

                .find({});

        res.json(workout)

    } catch (error) {
        
        res.json(error);
    }
});

router.get("/api/workouts/range", async (req, res)=>{
    try {
        
        const rangeWorkouts = 
            await Workouts

                .find({})

                .limit(7);

        res.json(rangeWorkouts)

    } catch (error) {

        res.json(error);
    }
})

router.put("/api/workouts/:id", async ({body, params}, res)=>{
    console.log(params)
    try {
        const updateWorkout = 
            await Workouts.where(

                params.id, 

                { $push: { exercises: body } }, 

                { new: true, runValidators: true } )

        res.json(updateWorkout);

    } catch (error) {
        res.json(error);
    }
})

router.post("/api/workouts", async ({body}, res)=>{
    try {
        // const workout = await Workouts.find({});

        // const WorkOuts = new Workouts(body);

        // WorkOuts.setTotalDuration(workout);

        const createWorkout = 
            await Workouts

                .create(body);

        res.json(createWorkout);

    } catch (error) {
        res.json(error);
    }
})

module.exports = router;