import React from 'react';
import '../styles/main.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate full-stack developer with expertise in JavaScript, 
              React, Node.js, and MongoDB. I love creating efficient, scalable 
              applications with intuitive user interfaces.
            </p>
            <p>
              When I'm not coding, you can find me hiking, reading tech blogs, 
              or experimenting with new web technologies.
            </p>
          </div>
          <div className="skills">
            <h3>Technical Skills</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React & Redux</li>
              <li>Node.js & Express</li>
              <li>MongoDB & Mongoose</li>
              <li>HTML5 & CSS3</li>
              <li>Git & GitHub</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;