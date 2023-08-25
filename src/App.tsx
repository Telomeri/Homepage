import React from 'react';
import './App.css';

import LandingPage from './components/LandingPage';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className='App'>
      <NavigationBar/>
      <LandingPage name='Lari Haapaniemi' major='Human-Computer Interaction at Aalto University' degree='Almost a Master of Science'/>
    </div>
  );
}

export default App;
