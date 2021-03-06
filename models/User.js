const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    deviceId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Users', UserSchema);