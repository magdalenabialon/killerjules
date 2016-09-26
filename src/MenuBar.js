// import React, { Component } from 'react';
// import { StickyContainer, Sticky } from 'react-sticky';
// import './MenuBar.css';



// class MenuBar extends React.Component {
//   render() {
//     return (
      

//         <StickyContainer >
//           <Sticky className={"MenuBarNav"}>

//               <p className = "HomeNav" ><a href=".LandingSliderWrapper">Home</a></p>
//               <div className = "ContactNav">
//                 <p className = "Contact">Contact </p>
//                 <a href="https://www.facebook.com/killerjulesfitness/?fref=ts" ><img className = "contact-logo" src={require('./fb.png')} /></a>
//                 <a href="https://www.instagram.com/killerjules_/" ><img className = "contact-logo" src ={require('./insta.png')} /></a>
//               </div>
//               <p className = "GroupNav" >Group Sessions</p>
//               <p className = "PrivateNav" >Private Sessions</p>
//               <p className = "WorkoutsNav" >Workouts</p>
//               <p className = "TimetableNav" >Timetable</p>


//           </Sticky>
//         </StickyContainer>


   
    
//     );
//   }
// }

// export default MenuBar;







"use strict";

var React     = require('react');
var ReactDOM  = require('react-dom');
var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

var Section = React.createClass({
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },



  render: function () {
    return (
      <div>


        <Element name="test1" className="element" >

        </Element>

        <Element name="test2" className="element">

        </Element>

        <Element name="test3" className="element">

        </Element>

        <Element name="test4" className="element">

        </Element>

        <Element name="test5" className="element">

        </Element>




        <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          HOME
        </Link>

        <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
          CONTACT
        </Link>


        <Element name="test7" className="element" id="containerElement" style={{
          position: 'relative',
          height:'200px',
          overflow:'scroll',
          marginBottom: '100px'
        }}>
        

          <Element name="firstInsideContainer" style={{
            marginBottom: '200px'
          }}>
            home
          </Element>

          <Element name="secondInsideContainer" style={{
            marginBottom: '200px'
          }}>
            contact
          </Element>
        </Element>


      </div>
    );
  }
});


ReactDOM.render(
  <Section />,
  document.getElementById('root')
);

export default MenuBar;