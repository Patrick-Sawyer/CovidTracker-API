const express = require("express");
const Location = require("../models/Location");

const router = express.Router();

//ADD NEW LOCATION

router.post('/add', async (req, res) => {
    const location = new Location({
        name: req.body.name
    })
    try {
        const savedLocation = await location.save()
        res.json(savedLocation);
    } catch (error) {
        res.json({message: error})
    }
})

//GET LOCATION OBJECT FROM NAME

router.get("/name", async (req, res) => {
    const location = await Location.find({name: req.body.name});
    res.json(location);
})

//GET ALL LOCATIONS

router.get("/all", async (req, res) => {
    const locations = await Location.find();
    res.json(locations);
})


module.exports = router;