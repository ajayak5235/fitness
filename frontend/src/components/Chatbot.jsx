import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Chatbot = () => {
  const [message, setMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const chatEndRef = useRef(null); // For smooth scrolling

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/ai/history');
        setConversation(data.history);
      } catch (error) {
        console.error('Error loading chat history:', error.response?.data || error.message);
      }
    };

    if (user) fetchHistory();
  }, [user]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); // Auto-scroll to latest message
  }, [conversation]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setConversation(prev => [...prev, { role: 'user', content: message, timestamp: new Date() }]);
    setMessage('');
    setLoading(true);

    try {
      const { data } = await axios.post('https://fitness-grij.vercel.app/api/ai/chat', { message });

      const formattedReply = formatAIResponse(data.reply);

      setConversation(prev => [...prev, { role: 'ai', content: formattedReply, timestamp: new Date() }]);
    } catch (error) {
      console.error('Chat error:', error.response?.data || error.message);
      setConversation(prev => [...prev, { role: 'ai', content: '⚠️ Failed to get response.', timestamp: new Date() }]);
    }

    setLoading(false);
  };

  const formatAIResponse = (text) => {
    if (typeof text !== 'string') return '⚠️ Error: Invalid response format.'; // Ensure text is a string
  
    return text
      .replace(/###/g, '') 
      .replace(/\*\*(.*?)\*\*/g, '$1') 
      .replace(/- Note:/g, '') 
      .split('\n') 
      .slice(0, 5) 
      .join('\n'); 
  };
  

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>AI Health Assistant</h2>
      <div style={styles.chatWindow}>
        {conversation.map((msg, i) => (
          <div key={i} style={msg.role === 'user' ? styles.userMessageContainer : styles.aiMessageContainer}>
            <div style={msg.role === 'user' ? styles.userMessage : styles.aiMessage}>
              <span style={styles.messageText}>{msg.content}</span>
              <span style={styles.timestamp}>
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}

        {loading && (
          <div style={styles.typingContainer}>
            <span style={styles.typingText}>AI is typing...</span>
            <div className="dot-flashing"></div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      <form onSubmit={handleSubmit} style={styles.inputForm}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask anything about health & fitness..."
          style={styles.inputField}
        />
        <button type="submit" style={styles.sendButton}>Send</button>
      </form>
    </div>
  );
};

const styles = {
    container: {
      maxWidth: '1000px',
      margin: '20px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    header: {
      textAlign: 'center',
      marginBottom: '10px',
      fontSize: '1.4em',
      color: '#333',
    },
    chatWindow: {
      height: '320px', 
      overflowY: 'auto',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      padding: '15px',
      display: 'flex',
      flexDirection: 'column',
      scrollbarWidth: 'thin',
      scrollbarColor: '#ccc transparent',
    },
    userMessageContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '5px',
    },
    aiMessageContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '10px',
    },
    userMessage: {
      backgroundColor: '#d1f7c4',
      padding: '12px',
      borderRadius: '15px 15px 15px 0',
      maxWidth: '70%',
      wordWrap: 'break-word',
    },
    aiMessage: {
      backgroundColor: '#e3e3e3',
      padding: '12px',
      borderRadius: '15px 15px 0 15px',
      maxWidth: '70%',
      wordWrap: 'break-word',
    },
    messageText: {
      fontSize: '1em',
      lineHeight: '1.5',
    },
    timestamp: {
      fontSize: '0.75em',
      color: '#555',
      display: 'block',
      marginTop: '5px',
    },
    typingContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginTop: '10px',
      gap: '10px',
    },
    typingText: {
      fontSize: '0.9em',
      color: '#555',
    },
    inputForm: {
      display: 'flex',
      gap: '10px',
      marginTop: '2px',
    },
    inputField: {
      flex: 1,
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '16px',
    },
    sendButton: {
      padding: '12px',
      backgroundColor: '#4CAF50',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
    },
  };

export default Chatbot;
