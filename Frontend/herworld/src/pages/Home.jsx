import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="hero">
        <h1>Empowering Women, Connecting Communities</h1>
        <p>
          A platform where women can share experiences, explore business ideas, access health tips, and stay updated with the world.
        </p>
        <Link to="/forum">
          <button className="cta-button">Join the Community</button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Feature List
const features = [
  {
    title: "Fem Forum",
    description: "Your Voice, Your Power!",
  },
  {
    title: "Women Thrive",
    description: "Empower, Elevate, Excel!",
  },
  {
    title: "Beyond Boundaries",
    description: "Stay Informed, Stay Ahead!",
  },
  {
    title: "Women's Wonderland",
    description: "Explore, Create, Inspire!",
  },
];

export default Home;
