const express = require("express");
const Outbreak = require("../models/Outbreak");
const Visit = require("../models/Visit");
const User = require("../models/User");

const router = express.Router();
const oneDay = 24 * 60 * 60 * 1000;

//DEAL WITH OUTBREAK

const getVisitsInLastTwoWeeks = async (deviceId, date) => {
    try {
        const visits = await Visit.find({deviceId: deviceId});
        visits.forEach((visit) => {
            if(Math.round(Math.abs((Date.parse(date) - Date.parse(visit.date)) / oneDay)) < 14){
                getUsersWhoVisitedThatVenueWithin2Days(visit.location, Date.parse(date));
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const getUsersWhoVisitedThatVenueWithin2Days = async (location, outbreakDate) => {
    try {
        const visits = await Visit.find({location: location});
        visits.forEach((visit) => {
            let visitDate = Date.parse(visit.date);
            let dayDiff = Math.round(Math.abs(visitDate - outbreakDate) / oneDay);
            if( dayDiff >= 0 && dayDiff <= 2){
                emailUser(visit.deviceId, visit.location, visit.date);
            }
        })
    } catch (error) {
        console.log(error)
    }
}

const emailUser = async (deviceId, location, date) => {
    try {
        const user = await User.findOne({deviceId: deviceId});
        const details = {
            message: "You might have covid",
            email: user.email,
            location: location,
            date: formatDate(date),
            time: date.getHours() + ":" + date.getMinutes()
        }
        console.log(details);
    } catch (error) {
        console.log(error)
    }
}

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

//LOG NEW OUTBREAK

router.post('/', async (req, res) => {
    const outbreak = new Outbreak({
        deviceId: req.body.deviceId,
    })
    try {
        const savedOutbreak = await outbreak.save();
        res.json(savedOutbreak);
    } catch (error) {
        res.json({message: error})
    }
    getVisitsInLastTwoWeeks(outbreak.deviceId, outbreak.date);
})

module.exports = router;