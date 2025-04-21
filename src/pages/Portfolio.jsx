import React from 'react';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import '../styles/main.css';

const Portfolio = ({ projects, experience }) => {
  return (
    <div className="portfolio-page">
      <Projects projects={projects} />
      <Experience experience={experience} />
    </div>
  );
};

export default Portfolio;