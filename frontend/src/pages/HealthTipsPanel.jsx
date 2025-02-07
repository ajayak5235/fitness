import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HealthTipsPanel = () => {
  const [tips, setTips] = useState([]);

  useEffect(() => {
    const fetchTips = async () => {
      try {
        const token = localStorage.getItem('token');  // ✅ Get token from localStorage
        if (!token) {
          console.error("No token found");
          return;
        }

        const { data } = await axios.post('http://localhost:5000/api/ai/tips', {
          headers: { Authorization: `Bearer ${token}` }  // ✅ Attach token here
        });
        console.log("data",data)
        setTips(data.tips.split('\n').filter(tip => tip.trim()));
      } catch (error) {
        console.error('Error fetching tips:', error.response?.data || error.message);
      }
    };

    fetchTips();
  }, []);

  return (
    <div style={{
      backgroundColor: '#fff',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '15px' }}>Personalized Health Tips</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tips.map((tip, index) => (
          <li key={index} style={{
            padding: '10px',
            marginBottom: '10px',
            backgroundColor: '#f8f9fa',
            borderRadius: '5px'
          }}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthTipsPanel;
