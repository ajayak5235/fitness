// const express = require('express')
// const OpenAI = require("openai")

// const app  = express()

// app.use('/',(req, res)=>{
//     res.send("hello sir nice to see you again")
// })





// const openai = new OpenAI({
//   baseURL: "https://openrouter.ai/api/v1",
//   apiKey: "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",
//   defaultHeaders: {
//     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
//     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
//   }
// })

// async function main() {
//   const completion = await openai.chat.completions.create({
//     model: "mistralai/mistral-small",
//     messages: [
//       {
//         "role": "user",
//         "content": "my age is 30 can you give me some helth tips?"
//       }
//     ]
//   })

//   console.log(completion.choices[0].message)
// }
// main()

// app.listen(3000, ()=>{
//     console.log(`backend is running on 3000`)
// })



// server/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./Routers/auth');
const aiRoutes = require('./Routers/ai');
const userRoutes = require('./Routers/user');

const app = express();
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/', (req, res)=>{
    res.send("Server is running")
})
app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));