import React from 'react';
import Navbar from '../Navbar/NavBar';
import Footer from '../Footer/Footer';
import './HomePage.css';
import HospitalList from '../HospitalList';

const HomePage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <h1 className="hero-title">Harnessed for productivity.</h1>
          <h2 className="hero-subtitle">This is not the main text</h2>
          <h2 className="hero-subtitle">Not Main Text.</h2>
          <HospitalList />
        </div>
      </div>
      <div className="content-section">
        <div className="content-text">
          <h3 className="content-title">Lorem ipsum dolor sit amet</h3>
          <p className="content-description">Consectetur adipiscing elit. Nullam iaculis nulla a ex vulputate, at volutpat sem vulputate.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
