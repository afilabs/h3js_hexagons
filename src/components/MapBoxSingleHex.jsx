import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, Source, MapRef, Marker } from "react-map-gl";
import React, {useRef, useState } from "react";
import { cellToBoundary } from "h3-js";

function MapBox() {

  const hexindex7Id = "876520d95ffffff";

  return (
      <div>
        <div className="map">
          <Map
            initialViewState={{
              latitude: 1.290270,
              longitude: 103.851959,
              zoom: 10,
              bearing: 0,
              pitch: 0,
            }}
            mapStyle="mapbox://styles/mapbox/light-v9"
            mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
            style={{
              height: "100vh",
              width: "100vw",
            }}
          >
            <Source
              type="geojson"
              data= {{
                "type": "Feature",
                "geometry": {
                  "type": "Polygon",
                  "coordinates": [cellToBoundary(hexindex7Id, true)]
                },
                "id": "abc123"
              }}
            >
              <Layer
                {...{
                  id: "abc123",
                  type: "fill",
                  paint: {
                    'fill-outline-color': 'white',
                    "fill-color": "#E14C48",
                    "fill-opacity": 0.7,
                  },
                }}
              />
              
            </Source>
          </Map>
        </div> 
      </div>
  );

};

export default MapBox;
