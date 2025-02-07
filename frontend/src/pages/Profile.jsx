import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    healthConditions: [],
    fitnessGoals: []
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        console.log("Inside useEffect");
        const token = localStorage.getItem('token');
        console.log("token",token)
        if (!token) {
          console.error("No token found");
          return;
        }

        const { data } = await axios.get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${token}` }  // ✅ Attach token here
        });

        console.log("Data fetched:", data);
        setFormData(data);
      } catch (error) {
        console.error('Profile fetch error:', error.response?.data || error.message);
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.error("No token found");
        return;
      }

      await axios.put('http://localhost:5000/api/user/profile', formData, {
        headers: { Authorization: `Bearer ${token}` }  // ✅ Attach token here
      });

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Profile update error:', error.response?.data || error.message);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>User Profile</h2>
      <form onSubmit={handleSubmit}>
        {/* Form fields for profile data */}
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default Profile;
