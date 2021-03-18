const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

const app = express();
app.use(bodyParser.json());

//USERS ROUTE

const usersRoute = require("./routes/users");
app.use('/users', usersRoute);

//VISITS ROUTE

const visitsRoute = require("./routes/visits");
app.use('/visits', visitsRoute);

//LOCATIONS ROUTE

const locationsRoute = require("./routes/locations");
app.use('/locations', locationsRoute);

//OUTBREAKS ROUTE

const outbreaksRoute = require("./routes/outbreaks");
app.use('/outbreaks', outbreaksRoute);

//DB STUFF
 
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }, 
    () => {
    console.log("CONNECTED TO DATABASE")
})

app.listen(3000);