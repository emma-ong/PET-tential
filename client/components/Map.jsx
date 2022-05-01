import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from '../components/LocationPin'

//require('dotenv').config()
//create-react-app has some built-in functionality
const apiKey = process.env.REACT_APP_API_KEY

function SimpleMap (){

  //Obj to store parameters for attribute values 
 let props = {
    center: {
      lat: -36.85,
      lng: 174.76
    },
    zoom: 11,
    name: "PET-tential HQ"
  };
 
    return (
      // Important! Always set the container height explicitly
      //Google maps tries to find parent container, if no height stated, maps collpases
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        >
          <LocationPin
          lat={props.center.lat}
          lng={props.center.lng}
          text={props.name}
        />
         
        </GoogleMapReact>
      </div>
      
    );
  }


export default SimpleMap;

// function Map() {
//   return <>
//   <h1>Google Maps</h1>
//   <Map/>
//   </>
// }


// export default Map