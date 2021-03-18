const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Visits', VisitSchema);