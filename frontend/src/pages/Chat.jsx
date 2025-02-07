// client/src/pages/Chat.js
import React from 'react';
import Chatbot from '../components/Chatbot';
import HealthTipsPanel from '../pages/HealthTipsPanel';

const Chat = () => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: '20px',
      padding: '20px',
      maxWidth: '1200px',
      margin: '0 auto'
    }}>
      <div>
        <Chatbot />
      </div>
    </div>
  );
};

export default Chat;