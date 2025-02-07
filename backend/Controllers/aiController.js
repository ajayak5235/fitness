// server/controllers/aiController.js
// const { Configuration, OpenAIApi } = require('openai');
// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// exports.generateHealthTips = async (req, res) => {
//   try {
//     const user = req.user;
//     const prompt = `Generate personalized health tips for a ${user.age}-year-old ${user.gender} with ${user.healthConditions.join(', ')}. Fitness goals: ${user.fitnessGoals.join(', ')}. Provide workout and diet suggestions.`;
    
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: prompt,
//       max_tokens: 500
//     });

//     res.json({ tips: response.data.choices[0].text });
//   } catch (error) {
//     res.status(500).json({ error: 'AI service error' });
//   }
// };

// exports.chatResponse = async (req, res) => {
//   try {
//     const { message } = req.body;
//     const response = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: `As a health assistant, respond to this query: ${message}. Provide general advice only.`,
//       max_tokens: 250
//     });

//     res.json({ reply: response.data.choices[0].text });
//   } catch (error) {
//     res.status(500).json({ error: 'Chat service error' });
//   }
// };



const OpenAI = require("openai")
const User = require('../Models/User')
// Configure OpenRouter client
const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY, // Should be set in .env
    defaultHeaders: {
      "HTTP-Referer": process.env.SITE_URL, // Set in .env
      "X-Title": process.env.APP_NAME, // Set in .env
    }
  });
  
  exports.generateHealthTips = async (req, res) => {
    try {
      const user = req.user; // Now this contains full user details
      console.log('User Details:', user);
  
      const healthConditions = user.healthConditions.length > 0 ? user.healthConditions.join(', ') : 'none';
      const fitnessGoals = user.fitnessGoals.length > 0 ? user.fitnessGoals.join(', ') : 'general fitness';
  
      const completion = await openai.chat.completions.create({
        model: "mistralai/mistral-small",
        messages: [
          {
            role: "system",
            content: "You are a professional health advisor. Provide personalized workout and diet suggestions."
          },
          {
            role: "user",
            content: `Generate health tips for a ${user.age}-year-old ${user.gender} with health conditions: ${healthConditions}. Fitness goals: ${fitnessGoals}.`
          }
        ]
      });
  
      res.json({ tips: completion.choices[0].message.content });
    } catch (error) {
      console.error('AI Error:', error);
      res.status(500).json({ error: 'AI service error' });
    }
  };
  
  
  exports.chatResponse = async (req, res) => {
    try {
      const { message } = req.body;
  
      const completion = await openai.chat.completions.create({
        model: "mistralai/mistral-small",
        messages: [
          {
            role: "system",
            content: "You are a health assistant. Provide general, safe advice about health, workouts, and nutrition."
          },
          {
            role: "user",
            content: message
          }
        ]
      });
  
      const reply = completion.choices[0].message.content;
      
      // if (req.user && message && reply) {
      //   await exports.saveChatHistory(req.user, [
      //     { role: "user", content: message },
      //     { role: "assistant", content: reply }
      //   ]);
      // }
  
      res.json({ reply });
    } catch (error) {
      console.error('Chat Error:', error);
      res.status(500).json({ error: 'Chat service error' });
    }
  };
  





  exports.saveChatHistory = async (user, conversation) => {
    try {
      if (!user || !user._id || !conversation || conversation.length === 0) {
        console.error("Invalid user or conversation data");
        return;
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $push: { chatHistory: { $each: conversation } } },
        { new: true }
      );
  
      if (!updatedUser) {
        console.error("Failed to update user chat history");
      } else {
        console.log("Chat history saved:", updatedUser.chatHistory);
      }
    } catch (error) {
      console.error('Error saving chat history:', error);
      throw new Error('Failed to save chat history');
    }
  };
  
  
  
  exports.getChatHistory = async (req, res) => {
    try {
      const user = req.user;  // Directly using the user object from the auth middleware
      console.log("User Details:", user);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.json({ history: user.chatHistory || [] });  // Returning the chatHistory from the user object
    } catch (error) {
      console.error('Error fetching chat history:', error);
      res.status(500).json({ error: 'Failed to load history' });
    }
  };
  
  // const User = require('../models/User'); // Import the User model


