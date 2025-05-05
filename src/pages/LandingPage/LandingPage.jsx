import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="content-wrapper">
        <HeroSection />
      </div>
    </div>
  );
}

export default LandingPage;