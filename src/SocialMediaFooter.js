import React, { Component } from 'react';
import './SocialMediaFooter.css';



class SocialMediaFooter extends Component {
  render() {
    return (
      
      <div className="SocialMediaFooterWrapper">

          <a href = "https://www.facebook.com/killerjulesfitness/?fref=ts" ><img className = "social-logo" src={require('./fb.png')} /></a>
          <a href = "https://www.instagram.com/killerjules_/" ><img className = "social-logo" src ={require('./insta.png')} /></a>
          <a href = "https://www.mindbodyonline.com/get-the-app" ><img className = "social-logo" src={require('./mb.jpg')} /></a>
          <img className = "social-logo" src={require('./killerJulesLogo.gif')} />

          <a href = "https://github.com/magdalenabialon" id = "createdBy" >created by Magdalena Bialon</a>

      </div>
    
    );
  }
}

export default SocialMediaFooter;




