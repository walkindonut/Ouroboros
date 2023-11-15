const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: {type: Date, required: true },
    updated: {type: Date, required: true }
});

module.exports = {
    userSchema
};