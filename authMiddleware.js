// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token;

    // Check if there's a token in the header
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            // Get the token from the Authorization header
            token = req.headers.authorization.split(' ')[1];

            // Decode the token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach user to the request
            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Not authorized, token failed' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Not authorized, no token' });
    }
};

module.exports = { protect };