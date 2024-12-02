const express = require('express');
const { updateUserProfile } = require('../controllers/userController'); // Import the user controller

const router = express.Router();

// Update user profile route
router.put('/update', updateUserProfile);

module.exports = router;