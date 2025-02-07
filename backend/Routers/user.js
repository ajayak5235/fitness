// server/routes/user.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { getProfile, updateProfile } = require('../Controllers/authControllers');

router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

module.exports = router;