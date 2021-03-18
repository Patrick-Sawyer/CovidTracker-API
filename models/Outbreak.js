const mongoose = require("mongoose");

const OutbreakSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Outbreaks', OutbreakSchema);