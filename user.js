// models/user.js
const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // Ensure no two users can have the same email
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address'], // Optional email validation
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Automatically add createdAt and updatedAt fields
});

// Create and export the User model
const User = mongoose.model('User', userSchema);
module.exports = User;
