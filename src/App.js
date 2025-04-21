import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';
import './styles/main.css';
import './styles/variables.css';
import './styles/animations.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [experience, setExperience] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://your-api-name.onrender.com'; // Replace with your Render URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsRes, experienceRes] = await Promise.all([
          fetch(`${API_URL}/api/projects`),
          fetch(`${API_URL}/api/work-experience`)
        ]);
        
        if (!projectsRes.ok || !experienceRes.ok) {
          throw new Error('Failed to fetch data');
        }

        const [projectsData, experienceData] = await Promise.all([
          projectsRes.json(),
          experienceRes.json()
        ]);

        setProjects(projectsData);
        setExperience(experienceData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/portfolio" 
              element={<Portfolio projects={projects} experience={experience} />} 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;