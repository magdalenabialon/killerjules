import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './MenuBar.css';
import smoothScroll from'smoothscroll';

// import Scroll from 'react-scroll';
// import Helpers from Scroll.Helpers;


class MenuBar extends React.Component {

  handleClick(e) {
    e.preventDefault();
    var destination = document.querySelector('#contact');
    smoothScroll(destination);
  }


  render() {
    return (
      

        <StickyContainer >
          <Sticky className={"MenuBarNav"}>

              <a href="#home"><p className = "HomeNav" >Home</p></a>
              <a onClick={this.handleClick.bind(this)} href="#contact"><p className = "ContactNav">Contact </p></a>
              <a href="#"><p className = "GroupNav" >Group Sessions</p></a>
              <a href="#"><p className = "PrivateNav" >Private Sessions</p></a>
              <a href="#"><p className = "WorkoutsNav" >Workouts</p></a>
              <a href="#"><p className = "TimetableNav" >Timetable</p></a>


          </Sticky>
        </StickyContainer>


   
    
    );
  }
}

export default MenuBar;
