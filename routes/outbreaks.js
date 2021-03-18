const express = require("express");
const Outbreak = require("../models/Outbreak");

const router = express.Router();

//DEAL WITH OUTBREAK

const handleOutbreak = (deviceId) => {
    //SEARCH THROUGH VISITS TABLE
    //GET ALL VISITS OF THAT DEVICE ID WITHING LAST 2 WEEKS
    //FOR EACH VISIT, EMAIL EVERYONE WHO VISITED THERE WITHIN 2 DAYS
}

//LOG NEW OUTBREAK

router.post('/', async (req, res) => {
    const outbreak = new Outbreak({
        deviceId: req.body.deviceId,
    })
    try {
        const savedOutbreak = await outbreak.save()
        res.json(savedOutbreak);
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;