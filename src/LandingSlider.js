import React, { Component } from 'react';
import './LandingSlider.css';

// import iamges
import kj0 from './kj0.jpg';
import kj1 from './kj1.jpg';
import kj2 from './kj2.jpg';
import kj3 from './kj3.jpg';


import ImageGallery from 'react-image-gallery';



class LandingSlider extends Component {


    handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }

  
  render() {


    const images = [
      {
        original: kj0
        // original: 'https://static.wixstatic.com/media/19c007_782634c7e1a544a3b806dde1c74787be.jpg/v1/fill/w_551,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_782634c7e1a544a3b806dde1c74787be.jpg'
        // originalClass: 'featured-slide',
        // thumbnailClass: 'featured-thumb',
        // originalAlt: 'original-alt',
        // thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Optional',
        // description: 'Killer Jules',
        // srcSet: 'Optional srcset (responsive images src)',
        // sizes:
      },
      {
        original:  kj1
        //original: 'https://static.wixstatic.com/media/19c007_977764e4e3f647c1876a9a8d2a76fa44.jpg/v1/fill/w_412,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_977764e4e3f647c1876a9a8d2a76fa44.jpg'
      },
      {
        original:  kj2
        //original: 'https://static.wixstatic.com/media/19c007_25d11e555a1842aba4bf775b707bf18c.jpg/v1/fill/w_380,h_507,al_c,q_90,usm_0.66_1.00_0.01/19c007_25d11e555a1842aba4bf775b707bf18c.jpg'
      },
      {
        original:  kj3
        //original: 'https://static.wixstatic.com/media/19c007_cfbd3c11be954e26a73f504bcbf813f6.jpg/v1/fill/w_412,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_cfbd3c11be954e26a73f504bcbf813f6.jpg'
      }
    ]



    return (
      
      <div className="LandingSliderWrapper">
          
                <ImageGallery
                  ref={i => this._imageGallery = i}
                  items={images}
                  autoPlay={true}
                  slideInterval={2500}
                  onImageLoad={this.handleImageLoad}
                  showNav={false}
                  showFullscreenButton={false}
                  showBullets={true}
                  showGalleryPlayButton={false}
                />



      </div>
    
    );

  }
}

export default LandingSlider;



