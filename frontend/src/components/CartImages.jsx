import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();

  // Blog categories with images and descriptions
  const categories = [
    { 
      id: 1, 
      name: "Women", 
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      path: "/women",
      description: "Explore fitness tips, diet plans, and workouts designed specifically for women to stay strong and healthy." 
    },
    { 
      id: 2, 
      name: "Men", 
      image: "https://images.unsplash.com/photo-1591027480007-a42f6ef886c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZpdG5lc3MlMjBtYW58ZW58MHx8MHx8fDA%3D", 
      path: "/men",
      description: "Find workout routines, nutrition guides, and lifestyle tips to build muscle, lose fat, and improve health." 
    },
    { 
      id: 3, 
      name: "Kid", 
      image: "https://images.unsplash.com/photo-1655842556550-6809c404ce9c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      path: "/Kid",
      description: "Discover health and fitness strategies for busy adults to maintain a balanced and active lifestyle."
    },
    { 
      id: 4, 
      name: "Old", 
      image: "https://images.unsplash.com/photo-1500468756762-a401b6f17b46?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
      path: "/old",
      description: "Get expert advice on fitness, nutrition, and wellness for seniors to live a healthier and happier life."
    }
  ];

  return (
    <div className="cart-container">
      {categories.map((category) => (
        <div key={category.id} className="category-card">
          <img src={category.image} alt={category.name} className="category-image" />
          <h3>{category.name}</h3>
          <p className="category-description">{category.description}</p>
          <button onClick={() => navigate(category.path)}>Read More</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
