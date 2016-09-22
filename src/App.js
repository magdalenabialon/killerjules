import React, { Component } from 'react';
import './App.css';

import GroupKillerPage from './GroupKillerPage';
import PrivateSessionsPage from './PrivateSessionsPage';


class App extends Component {
  render() {
    return (
      
      <div className="App">

        <h1>Killer Jules</h1>
         
         <GroupKillerPage />
         <PrivateSessionsPage />

      </div>
    
    );
  }
}

export default App;
