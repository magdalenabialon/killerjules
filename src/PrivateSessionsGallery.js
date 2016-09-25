import React, { Component } from 'react';
import './PrivateSessionsPage.css';



class PrivateSessionsGallery extends Component {
  render() {
    return (
      <div className="PrivateGalleryDiv">

          <img className = "pGallery" src={require('./gallery/p1.png')} />
          <img className = "pGallery" src={require('./gallery/p4.png')} />
          <img className = "pGallery" src={require('./gallery/p3.png')} />

          <img className = "pGallery" src={require('./gallery/p9.jpg')} />
          <img className = "pGallery" src={require('./gallery/p7.png')} />
          <img className = "pGallery" src={require('./gallery/p6.png')} />

          <img className = "pGallery" src={require('./gallery/p5.png')} />
          <img className = "pGallery" src={require('./gallery/p2.png')} />
          <img className = "pGallery" src={require('./gallery/p8.jpg')} />
          
      </div>
    );
  }
}

export default PrivateSessionsGallery;