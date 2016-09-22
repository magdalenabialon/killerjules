import React, { Component } from 'react';
import './PrivateSessionsPage';
import './MenuBar.css';



class MenuBar extends Component {
  render() {
    return (
      
      <div className="MenuBarWrapper">

        <ul>     
          <li>Home</li>
          <li>Group Sessions</li>
          <li>Private Sessions</li>
          <li>Workouts</li>
          <li>Timetable</li>
          <li>Healthy Treats</li>
          <li>Contact / Social Media</li>
        </ul>

      </div>
    
    );
  }
}

export default MenuBar;



