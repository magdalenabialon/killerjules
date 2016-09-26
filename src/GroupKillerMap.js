import React, { Component } from 'react';
import './GroupKillerPage.css';
// import MapGL from 'react-map-gl';
import ReactMapboxGl, { Layer, Feature, ZoomControl } from "react-mapbox-gl";
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';


const { accessToken } = {
                      "accessToken": "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A",
                      "style": "mapbox://styles/mapbox/streets-v8"
                    }



class GroupKillerMap extends Component {

    state = {
      popup: null,
      center: [ 144.995162, -37.849719 ]
    };


      render() {
        return (

          <div id="map">

            <ReactMapboxGl id="map"
              style="mapbox://styles/mapbox/outdoors-v9"
              accessToken={accessToken}
              center={this.state.center}
              movingMethod="jumpTo"
              containerStyle={{ height: "100%", width: "100%" }}>
            </ReactMapboxGl>

          </div>




    );
  }

}

export default GroupKillerMap;


          // <MapGL id="map" width={400} height={400} latitude={-37.849719} longitude={144.995162}
          //   zoom={8} onChangeViewport={(viewport) => {
          //     const {latitude, longitude, zoom} = viewport;
          //   }}
          // />