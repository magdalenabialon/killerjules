import React, { Component } from 'react';
import './PrivateSessionsPage.css';

import PrivateSessionsGallery from './PrivateSessionsGallery';
import PrivateSessionsDescription from './PrivateSessionsDescription';




class PrivateSessionsPage extends Component {
  render() {
    return (
      
      <div className="PrivateKillerWrapper">

          <h1>PRIVATE SESSIONS WITH KILLER</h1>
          
          <PrivateSessionsGallery />
          <PrivateSessionsDescription />

      </div>
    
    );
  }
}

export default PrivateSessionsPage;



