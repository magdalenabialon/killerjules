import React, { Component } from 'react';
import './Timetable.css';

// import KillerParkWorkout from './KillerParkWorkout';





class Timetable extends Component {

  render() {
    return (
      
      <div id="timetable" className="TimetableWrapper">
          
          <h1>TIMETABLE</h1>


          <div id="calendar">

            <div className="CalendaRow">
              <h3 className="row">time</h3>
              <h4 className="rowS">AM 6 :15 - 7 :00</h4>
              <h4 className="rowS">AM 7 :15 - 8 :00</h4>
              <h4 className="rowS">AM 9:00 - 10:00</h4>

              <h4 className="rowS">Pm 12:00 - 1:00</h4>

              <h4 className="rowS">Pm 2:00 - 3:00</h4>

              <h4 className="rowS">PM 6:00 - 7:00</h4>

            </div>
            <div className="CalendaRow">
              <h3 className="row">MON</h3>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Dynamic Fitness</h4>
              <h4 className="rowS">Dynamic Fitness</h4>
              <h4 className="rowS">.</h4>
            </div>

            <div className="CalendaRow">
              <h3 className="row">TUE</h3>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Group Killer</h4>      
            </div>

            <div className="CalendaRow">
              <h3 className="row">WED</h3>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
            </div>

            <div className="CalendaRow">
              <h3 className="row">THU</h3>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Dynamic Fitness</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Group Killer</h4> 
            </div>

            <div className="CalendaRow">
              <h3 className="row">FRI</h3>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Dynamic Fitness</h4>
              <h4 className="rowS">.</h4> 
            </div>

            <div className="CalendaRow">
              <h3 className="row">SAT</h3>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">Group Killer</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4>
              <h4 className="rowS">.</h4> 
            </div>
          

          </div>



      </div>
    
    );
  }
}

export default Timetable;



