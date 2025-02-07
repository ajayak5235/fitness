// server/routes/ai.js
const express = require('express');
const router = express.Router();
const { 
  generateHealthTips, 
  chatResponse,
  getChatHistory,
  saveChatHistory
} = require('../Controllers/aiController');
const auth = require('../middleware/auth');

router.post('/tips', auth, generateHealthTips);
router.post('/chat',  chatResponse);
router.get('/history', auth, getChatHistory);

// Add middleware to save chat history
router.use(auth, async (req, res, next) => {
  try {
    await saveChatHistory(req.user, req.body.conversation);
  } catch (error) {
    console.error('History save error:', error);
  }
  next();
});

module.exports = router;