// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { login, signup } = require('../Controllers/authControllers');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;