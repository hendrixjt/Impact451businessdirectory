// import React from 'react';
// import {
//   withScriptjs,
//   withGoogleMap,
//   GoogleMap,
//   Marker
// } from "react-google-maps";

// const RegularMap = withScriptjs(
//   withGoogleMap(props => (
//     <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: 40.748817, lng: -73.985428 }}
//       defaultOptions={{
//         scrollwheel: false
//       }}
//     >
//       <Marker position={{ lat: 40.748817, lng: -73.985428 }} />
//     </GoogleMap>
//   ))
// );

// function GoogleMaps({...props}){
//   return (
//     <RegularMap
//       googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
//       loadingElement={<div style={{ height: '100%' }} />}
//       containerElement={<div style={{ height: '280px' }} />}
//       mapElement={<div style={{ height: '100%' }} />}
//     />
//   );
// }

// export default GoogleMaps;