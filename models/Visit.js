const mongoose = require("mongoose");

const VisitSchema = mongoose.Schema({
    user: {
        type: Number,
        required: true
    },
    location: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Visits', VisitSchema);