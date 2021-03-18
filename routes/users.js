const express = require("express");
const User = require("../models/User");

const router = express.Router();

//ADD A USER

router.post('/add', async (req, res) => {
    const user = new User({
        deviceId: req.body.deviceId,
        email: req.body.email
    })
    try {
        const savedUser = await user.save()
        res.json(savedUser);
    } catch (error) {
        res.json({message: error})
    }
})

module.exports = router;