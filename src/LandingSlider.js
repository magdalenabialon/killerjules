import React, { Component } from 'react';
import './LandingSlider.css';

import ImageGallery from 'react-image-gallery';
// import ImageGallery from './src';


class LandingSlider extends Component {


    handleImageLoad(event) {
      console.log('Image loaded ', event.target)
    }

  
  render() {


    const images = [
      {
        // original: 'kj1.jpg'
        original: 'https://static.wixstatic.com/media/19c007_782634c7e1a544a3b806dde1c74787be.jpg/v1/fill/w_551,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_782634c7e1a544a3b806dde1c74787be.jpg'
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
        // original: './kj2.jpg'
        original: 'https://static.wixstatic.com/media/19c007_977764e4e3f647c1876a9a8d2a76fa44.jpg/v1/fill/w_412,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_977764e4e3f647c1876a9a8d2a76fa44.jpg'
      },
      {
        // original: './kj3.jpg'
        original: 'https://static.wixstatic.com/media/19c007_25d11e555a1842aba4bf775b707bf18c.jpg/v1/fill/w_380,h_507,al_c,q_90,usm_0.66_1.00_0.01/19c007_25d11e555a1842aba4bf775b707bf18c.jpg'
      },
      {
        original: 'https://static.wixstatic.com/media/19c007_cfbd3c11be954e26a73f504bcbf813f6.jpg/v1/fill/w_412,h_551,al_c,q_90,usm_0.66_1.00_0.01/19c007_cfbd3c11be954e26a73f504bcbf813f6.jpg'
        // original: './kj4.jpg', renderItem: './kj4.jpg'
        // original: './kj4.jpg'
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

    //   renderItem(item) {
    //     const onImageError = this.props.onImageError || this._handleImageError

    //     return (



          
    //       <div className='LandingSliderWrapper'>
    //         <img
    //             src={item.original}
    //             // alt={item.originalAlt}
    //             // srcSet={item.srcSet}
    //             // sizes={item.sizes}
    //             onLoad={this.props.onImageLoad}
    //             onError={onImageError.bind(this)}
    //         />
    //         {
    //           item.description &&
    //             <span className='image-gallery-description'>
    //               {item.description}
    //             </span>
    //         }
    //       </div>
    //     )
    // }

  }
}

export default LandingSlider;



