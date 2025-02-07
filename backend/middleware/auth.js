const jwt = require('jsonwebtoken');
const User = require('../Models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Fetch full user data from the database
    const user = await User.findById(decoded.id).select('-password -refreshToken'); // Exclude password for security

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user; // Attach full user object
    next();
  } catch (error) {
    console.error('Auth Error:', error);
    res.status(401).json({ error: 'Please authenticate' });
  }
};

module.exports = auth;
