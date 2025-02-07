import { useState, useEffect } from 'react';
import '../App.css';
import Cart from '../components/CartImages';
import img1 from '../assets/danielle-cerullo-CQfNt66ttZM-unsplash.jpg';
import img2 from '../assets/gabin-vallet-J154nEkpzlQ-unsplash.jpg';
import img3 from '../assets/kal-visuals-aK4iPNYipnU-unsplash.jpg';

const Home = () => {
  const images = [img1, img2, img3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="carousel">
        <img src={images[currentIndex]} alt="Fitness" className="carousel-image" />
      </div>
      <div className="content">
        <h1 className="header">Welcome to AI Fitness Assistant</h1>
        
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
