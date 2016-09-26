import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './MenuBar.css';
import smoothScroll from'smoothscroll';

// import Scroll from 'react-scroll';
// import Helpers from Scroll.Helpers;


class MenuBar extends React.Component {

  handleClickHome(e) {
    e.preventDefault();
    var desHome = document.querySelector('#home');
    smoothScroll(desHome);    
  }


  handleClickContact(e) {
    e.preventDefault();
    var desContact = document.querySelector('#contact');
    smoothScroll(desContact);    
  }

  handleClickGroup(e) {
    e.preventDefault();
    var desGroupSessions = document.querySelector('#groupSessions');
    smoothScroll(desGroupSessions);    
  }

  handleClickPrivate(e) {
    e.preventDefault();
    var desPrivateSessions = document.querySelector('#privateSessions');
    smoothScroll(desPrivateSessions);    
  }

  handleClickWorkouts(e) {
    e.preventDefault();
    var desWorkouts = document.querySelector('#workouts');
    smoothScroll(desWorkouts);    
  }

  handleClickTimetable(e) {
    e.preventDefault();
    var desTimetable = document.querySelector('#timetable');
    smoothScroll(desTimetable);    
  }







  render() {
    return (
      

        <StickyContainer >
          <Sticky className={"MenuBarNav"}>

              <a onClick={this.handleClickHome.bind(this)} href="#home"><p className = "HomeNav" >Home</p></a>
              <a onClick={this.handleClickContact.bind(this)} href="#contact"><p className = "ContactNav">Contact </p></a>
              <a onClick={this.handleClickGroup.bind(this)} href="#groupSessions"><p className = "GroupNav" >Group Sessions</p></a>
              <a onClick={this.handleClickPrivate.bind(this)} href="#privateSessions"><p className = "PrivateNav" >Private Sessions</p></a>
              <a onClick={this.handleClickWorkouts.bind(this)} href="#workouts"><p className = "WorkoutsNav" >Workouts</p></a>
              <a onClick={this.handleClickTimetable.bind(this)} href="#timetable"><p className = "TimetableNav" >Timetable</p></a>


          </Sticky>
        </StickyContainer>


   
    
    );
  }
}

export default MenuBar;
