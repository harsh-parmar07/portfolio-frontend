import React from 'react';
import '../styles/main.css';

const Experience = ({ experience }) => {
  return (
    <section id="experience" className="section">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experience.map((exp) => (
          <div key={exp._id} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <p className="role">{exp.role}</p>
              <p className="duration">{exp.duration}</p>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;