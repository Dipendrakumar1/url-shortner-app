const mongoose = require('mongoose');

// creating schema
const urlShorterSchema = mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectUrl: {
        type: String,
        required: true,
    },
    visHistory:[{timestamps:Number}],
}, { timestamps: true });

const URL = mongoose.model('url', urlShorterSchema);
module.exports = { URL, };