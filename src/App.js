import React, { Component } from 'react';
import './App.css';

import MenuBar from './MenuBar';
import GroupKillerPage from './GroupKillerPage';
import PrivateSessionsPage from './PrivateSessionsPage';
import WorkoutsPage from './WorkoutsPage';
import LandingSlider from './LandingSlider';


class App extends Component {
  render() {
    return (
      
      <div className="App">

        <h1>Killer Jules</h1>
         <MenuBar />
         <LandingSlider />
         <GroupKillerPage />
         <PrivateSessionsPage />
         <WorkoutsPage />


      </div>
    
    );
  }
}

export default App;
