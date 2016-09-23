import React, { Component } from 'react';
import './SocialMediaFooter.css';



class SocialMediaFooter extends Component {
  render() {
    return (
      
      <div className="SocialMediaFooterWrapper">
          
          <a href = "https://www.facebook.com/killerjulesfitness/?fref=ts" ><img src={require('./fb.png')} /></a>
          <a href = "https://www.instagram.com/killerjules_/" ><img src={require('./insta.png')} /></a>
          <img src={require('./killerJulesLogo.gif')} />





      </div>
    
    );
  }
}

export default SocialMediaFooter;



