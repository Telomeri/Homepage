import React from 'react';
import '../assets/css/NavigationBar.css'; 
import cv from '../assets/files/cv_larihaapaniemi2023_08.pdf';
interface NavigationBarInt {}

const NavigationBar: React.FC<NavigationBarInt> = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <button className="navbar-button">Home</button>
      </div>
      <div className="navbar-right">
        <form method="get" action={cv}>
            <button type='submit' className="navbar-button">Resume</button>
        </form>
      </div>
    </div>
  );
};

export default NavigationBar;