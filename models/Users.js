const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({});
const gmSchema = new mongoose.Schema({});
const xpSchema = new mongoose.Schema({});

const UsersShema = mongoose.Schema({
    wallet: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    items: {
        type: itemsSchema,
        default: {}
    },
    gm: {
        type: gmSchema,
        default: {}
    },
    xp: {
        type: xpSchema,
        default: {}
    },
    status: {
        type: Boolean,
        default: true
    },
    registration: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Users', UsersShema);