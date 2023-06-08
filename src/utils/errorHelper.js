
const mongoose = require('mongoose');
exports.extractErrorMessages = (err) => {
    if (err instanceof mongoose.Error) {
        return Object.values(err.errors).map(err => err.message);
    } else if (err) {
        return [err.message]
    }
} 