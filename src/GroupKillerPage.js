import React, { Component } from 'react';
import './GroupKillerPage.css';

import GroupKillerDescription from './GroupKillerDescription';
import GroupKillerGallery from './GroupKillerGallery';
import GroupKillerMap from './GroupKillerMap';




class GroupKillerPage extends Component {
  render() {
    return (
      
      <div className="GroupkillerWrapper">
          
          <GroupKillerDescription />
          <GroupKillerGallery />
          <GroupKillerMap />

      </div>
    
    );
  }
}

export default GroupKillerPage;



