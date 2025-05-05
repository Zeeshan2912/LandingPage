import { useNavigate } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/kpi-form');
  };

  return (
    <div className="hero">
      <h1 className="hero-title">Welcome to Klimb</h1>
      <p className="hero-subtitle">Start tracking your KPIs today</p>
      <button className="get-started-btn" onClick={handleGetStarted}>
        Get Started
      </button>
    </div>
  );
}

export default HeroSection;