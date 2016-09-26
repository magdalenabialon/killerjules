// import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import './MenuBar.css';





// class MenuBar extends React.Component {
//   render() {
//     return (
      

//         <StickyContainer >
//           <Sticky className={"MenuBarNav"}>

//               <p className = "HomeNav" >Home</p>
//               <p className = "ContactNav">Contact </p>
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





var React   = require('react');
var Scroll  = require('react-scroll');
var Helpers = Scroll.Helpers;



var Element = React.createClass({
  render: function () {
    return (

        <StickyContainer >
          <Sticky className={"MenuBarNav"}>
                
                <div {...this.props}>
                     {this.props.children}
                    <p className = "HomeNav" >Home</p>
                </div>

              // <p className = "HomeNav" >Home</p>
              // <p className = "ContactNav">Contact </p>
              // <p className = "GroupNav" >Group Sessions</p>
              // <p className = "PrivateNav" >Private Sessions</p>
              // <p className = "WorkoutsNav" >Workouts</p>
              // <p className = "TimetableNav" >Timetable</p>


          </Sticky>
        </StickyContainer>

      // <div {...this.props}>
      //   {this.props.children}
      // </div>
    );
  }
});

module.exports = Helpers.Element(Element);



var Link = React.createClass({
  render: function () {
    return (
      <a {...this.props}>
        {this.props.children}
      </a>
    );
  }
});

module.exports = Helpers.Scroll(Link);

export default MenuBar;










// "use strict";

// var React     = require('react');
// var ReactDOM  = require('react-dom');
// var Scroll    = require('react-scroll');

// var Link       = Scroll.Link;
// var DirectLink = Scroll.DirectLink;
// var Element    = Scroll.Element;
// var Events     = Scroll.Events;
// var scroll     = Scroll.animateScroll;
// var scrollSpy  = Scroll.scrollSpy;

// var durationFn = function(deltaTop) {
//     return deltaTop;
// };

// var Section = React.createClass({
//   componentDidMount: function() {

//     Events.scrollEvent.register('begin', function() {
//       console.log("begin", arguments);
//     });

//     Events.scrollEvent.register('end', function() {
//       console.log("end", arguments);
//     });

//     scrollSpy.update();

//   },
//   scrollToTop: function() {
//     scroll.scrollToTop();
//   },
//   componentWillUnmount: function() {
//     Events.scrollEvent.remove('begin');
//     Events.scrollEvent.remove('end');
//   },



//   render: function () {
//     return (
//       <div>

//         <Link activeClass="active" to="firstInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
//           HOME
//         </Link>

//         <Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{display:'inline-block', margin: '20px'}}>
//           CONTACT
//         </Link>


//         <Element name="test7" className="element" id="containerElement" style={{
//           position: 'relative',
//           height:'200px',
//           overflow:'scroll',
//           marginBottom: '100px'
//         }}>
        

//           <Element name="firstInsideContainer" style={{
//             marginBottom: '200px'
 
//           }}>
//             home
//           </Element>

//           <Element name="secondInsideContainer" style={{
//             marginBottom: '200px'
//           }}>
//             contact
//           </Element>
//         </Element>


//       </div>
//     );
//   }
// });


// ReactDOM.render(
//   <Section />,
//   document.getElementById('root')
// );

// export default MenuBar;