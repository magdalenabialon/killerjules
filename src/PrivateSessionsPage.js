import React, { Component } from 'react';
import './PrivateSessionsPage';

import PrivateSessionsDescription from './PrivateSessionsDescription';
import PrivateSessionsGallery from './PrivateSessionsGallery';




class PrivateSessionsPage extends Component {
  render() {
    return (
      
      <div className="PrivateKillerWrapper">
          
          <PrivateSessionsDescription />
          <PrivateSessionsGallery />

      </div>
    
    );
  }
}

export default PrivateSessionsPage;



