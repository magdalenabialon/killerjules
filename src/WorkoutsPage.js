import React, { Component } from 'react';
import './PrivateSessionsPage.css';

import KillerParkWorkout from './KillerParkWorkout';
import KillerGymWorkout from './KillerGymWorkout';
import KillerHomeWorkout from './KillerHomeWorkout';




class PrivateSessionsPage extends Component {
  render() {
    return (
      
      <div className="WorkoutWrapper">
          
          <KillerParkWorkout />
          <KillerGymWorkout />
          <KillerHomeWorkout />

      </div>
    
    );
  }
}

export default PrivateSessionsPage;



