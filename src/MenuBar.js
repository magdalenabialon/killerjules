import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './MenuBar.css';



class MenuBar extends React.Component {
  render() {
    return (
      

        <StickyContainer >
          <Sticky className={"MenuBarNav"}>

              <p className = "HomeNav" ><a href=".LandingSliderWrapper">Home</a></p>
              <div className = "ContactNav">
                <p className = "Contact">Contact </p>
                <a href="https://www.facebook.com/killerjulesfitness/?fref=ts" ><img className = "contact-logo" src={require('./fb.png')} /></a>
                <a href="https://www.instagram.com/killerjules_/" ><img className = "contact-logo" src ={require('./insta.png')} /></a>
              </div>
              <p className = "GroupNav" >Group Sessions</p>
              <p className = "PrivateNav" >Private Sessions</p>
              <p className = "WorkoutsNav" >Workouts</p>
              <p className = "TimetableNav" >Timetable</p>
              <p className = "TreatsNav" >Healthy Treats</p>


          </Sticky>
        </StickyContainer>


   
    
    );
  }
}

export default MenuBar;



