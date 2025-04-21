import React from 'react';
import '../styles/main.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I build exceptional digital experiences</p>
          <a href="#contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </div>
  );
};

export default Home;