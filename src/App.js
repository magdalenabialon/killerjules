import React, { Component } from 'react';
import './App.css';

import MenuBar from './MenuBar';
import LandingSlider from './LandingSlider';
import GroupKillerPage from './GroupKillerPage';
import PrivateSessionsPage from './PrivateSessionsPage';
import WorkoutsPage from './WorkoutsPage';
import Timetable from './Timetable';
import HealthyTreats from './HealthyTreats';
import SocialMediaFooter from './SocialMediaFooter';



class App extends Component {
  render() {
    return (
      
      <div className="App">

         <LandingSlider />
         <MenuBar />
         <GroupKillerPage />
         <PrivateSessionsPage />
         <WorkoutsPage />
         <Timetable />
         <SocialMediaFooter />


      </div>
    
    );
  }
}

export default App;
