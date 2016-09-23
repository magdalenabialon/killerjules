import React, { Component } from 'react';
import './LandingSlider.css';

import ImageGallery from 'react-image-gallery';



class LandingSlider extends Component {

    handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }
  
  render() {


    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        originalAlt: 'original-alt',
        thumbnailAlt: 'thumbnail-alt',
        thumbnailLabel: 'Optional',
        description: 'Killer Jules',
        srcSet: 'Optional srcset (responsive images src)',
        sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]



    return (
      
      <div className="LandingSliderWrapper">
          
          <h1>here will go SLIDER</h1>
                <ImageGallery
                  ref={i => this._imageGallery = i}
                  items={images}
                  slideInterval={1000}
                  onImageLoad={this.handleImageLoad}/>


      </div>
    
    );
  }
}

export default LandingSlider;



