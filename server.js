const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
require("dotenv").config()

//heroku app
const PORT = process.env.PORT || 3000;

//set app to use express
const app = express();

app.use(logger("dev"));

//middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//static public folder
app.use(express.static("public"));

//mongoose database
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/workout_tracker_db", 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }
    );

//require routes
app.use(require("./routes"));

app.listen(PORT, () => {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
  });