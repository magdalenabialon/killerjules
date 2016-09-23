import React, { Component } from 'react';
import './LandingSlider.css';

import ImageGallery from 'react-image-gallery';
// import ImageGallery from '../src/ImageGallery';


class LandingSlider extends Component {


    handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }

      constructor() {
        super();
        this.state = {
          showIndex: false,
          slideOnThumbnailHover: false,
          showBullets: true,
          infinite: true,
          showThumbnails: true,
          showFullscreenButton: true,
          showGalleryFullscreenButton: true,
          showPlayButton: false,
          showGalleryPlayButton: false,
          showNav: true,
          slideInterval: 2000,
          showVideo: {},
          autoPlay: true,
        };
      }

  
  render() {


    const images = [
      {
        original: 'https://static.wixstatic.com/media/19c007_6bd37bf9b5a1446fb1568ff3a3c05489.jpg/v1/fill/w_207,h_279,al_c,q_80,usm_0.66_1.00_0.01/19c007_6bd37bf9b5a1446fb1568ff3a3c05489.jpg',
        // thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        // originalClass: 'featured-slide',
        // thumbnailClass: 'featured-thumb',
        // originalAlt: 'original-alt',
        // thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Optional',
        // description: 'Killer Jules',
        // srcSet: 'Optional srcset (responsive images src)',
        // sizes: 'Optional sizes (image sizes relative to the breakpoint)',
      },
      {
        original: 'https://static.wixstatic.com/media/19c007_9ed1a9637c71448da975d26d63830ac2.jpg/v1/fill/w_207,h_213,al_c,q_80,usm_0.66_1.00_0.01/19c007_9ed1a9637c71448da975d26d63830ac2.jpg',
        // thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'https://static.wixstatic.com/media/19c007_25d11e555a1842aba4bf775b707bf18c.jpg/v1/fill/w_380,h_507,al_c,q_90,usm_0.66_1.00_0.01/19c007_25d11e555a1842aba4bf775b707bf18c.jpg',
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]



    return (
      
      <div className="LandingSliderWrapper">
          
                <ImageGallery
                  ref={i => this._imageGallery = i}
                  items={images}
                  slideInterval={2500}
                  onImageLoad={this.handleImageLoad}/>



      </div>
    
    );
  }
}

export default LandingSlider;



