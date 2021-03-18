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

module.exports = router;