import React, { Component } from 'react';
import './GroupKillerPage.css';
import ReactMapboxGl, { GeoJSONLayer, Layer, Feature, ZoomControl } from "react-mapbox-gl";

const {geojson} =
{
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                place: "Killer Julles Gym",
                },
                geometry: {
                type: "Point",
                coordinates: [
                    144.995162, 
                    -37.849719
                ]
            }
     }
    ]
}

const { accessToken } = {
                      "accessToken": "pk.eyJ1IjoiZmFicmljOCIsImEiOiJjaWc5aTV1ZzUwMDJwdzJrb2w0dXRmc2d0In0.p6GGlfyV-WksaDV_KdN27A",
                      "style": "mapbox://styles/mapbox/streets-v8"
                    }

const  {markerCoord } = [ 144.995162, -37.849719 ]



class GroupKillerMap extends Component {

    state = {
      popup: null,
      scrollEnabled: false,
      center: [ 144.995162, -37.849719 ],
      scrollZoom: false,
    };


      render() {
        return (

          <div id="map">

            <ReactMapboxGl
              style="mapbox://styles/mapbox/outdoors-v9"
              accessToken={accessToken}
              center={this.state.center}
              scrollZoom={false}
              movingMethod="jumpTo"
              containerStyle={{ height: "100%", width: "100%" }}>

              <ZoomControl
                zoomDiff={1}
                scrollEnabled={false}
                scrollZoom="false"
              />

              <GeoJSONLayer
                data={geojson}
              />
            
                  

            </ReactMapboxGl>


          </div>


    );
  }

}

export default GroupKillerMap;


          
//pk.eyJ1IjoibWFnZGFsZW5hYmlhbG9uIiwiYSI6ImNpc2p3cnUwczAycXcyem9jYXpzZWZ6eW4ifQ.RWDUb9U9vdUlNuKcPGJDhg

                // scrollZoom="false"
                // zoomControl={false}
                // scrollZoom={disable}
                // zoomControl={disable}