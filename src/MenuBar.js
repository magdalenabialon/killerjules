import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './MenuBar.css';



class MenuBar extends React.Component {
  render() {
    return (
      

        <StickyContainer >
          <Sticky className={"MenuBarNav"}>

              <p>Home</p>
              <p>Group Sessions</p>
              <p>Private Sessions</p>
              <p>Workouts</p>
              <p>Timetable</p>
              <p>Healthy Treats</p>
              <p>Contact  
                <a href="https://www.facebook.com/killerjulesfitness/?fref=ts" ><img className = "contact-logo" src={require('./fb.png')} /></a>
                <a href="https://www.instagram.com/killerjules_/" ><img className = "contact-logo" src ={require('./insta.png')} /></a>
              </p>


          </Sticky>
        </StickyContainer>


   
    
    );
  }
}

export default MenuBar;



