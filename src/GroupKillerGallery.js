import React, { Component } from 'react';
import './GroupKillerPage.css';



class GroupKillerGallery extends Component {
  render() {
    return (

       <div className="GroupGalleryDiv" >

          <img className = "gGallery" src={require('./gallery/g1.png')} />
          <img className = "gGallery" src={require('./gallery/g4.png')} />
          <img className = "gGallery" src={require('./gallery/g3.png')} />

          <img className = "gGallery" src={require('./gallery/g2.png')} />
          <img className = "gGallery" src={require('./gallery/g5.png')} />
          <img className = "gGallery" src={require('./gallery/g6.png')} />

          <img className = "gGallery" src={require('./gallery/g7.png')} />
          <img className = "gGallery" src={require('./gallery/g8.png')} />
          <img className = "gGallery" src={require('./gallery/g9.png')} />


      </div>

    );
  }
}

export default GroupKillerGallery;