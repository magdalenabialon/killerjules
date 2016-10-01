import React, { Component } from 'react';
import './GroupKillerPage.css';
import logo from './killerJulesLogo.gif';
import ReactMapboxGl, { GeoJSONLayer, Layer, Feature, ZoomControl } from "react-mapbox-gl";

var geojson =
{
    type: "FeatureCollection",
    features: [
        {
            type: "Feature",
            properties: {
                place: "Killer Julles Gym",
                iconSize: [20, 20],
                iconImage: logo,
                },
              geometry: {
                type: "Point",
                coordinates: [
                    144.995029,
                    -37.850660
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
           <h5 id="address">Meister Athlete 🏆.  22 Cecil Pl, Prahran</h5>

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

              <GeoJSONLayer id="marker"
                data={geojson}
                type="symbol"
                // layout={{ "icon-image": "marker-15" }}
                
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