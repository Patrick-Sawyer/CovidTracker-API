const express = require("express");
const Visit = require("../models/Visit");

const router = express.Router();

//LOG A VISIT

router.post('/add', async (req, res) => {
    const visit = new Visit({
        user: req.body.user,
        location: req.body.location
    })
    try {
        const savedVisit = await visit.save()
        res.json(savedVisit);
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;