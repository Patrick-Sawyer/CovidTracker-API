const express = require("express");
const Outbreak = require("../models/Outbreak");

const router = express.Router();

//LOG NEW OUTBREAK

router.post('/add', async (req, res) => {
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