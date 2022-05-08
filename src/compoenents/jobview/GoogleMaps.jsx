import React from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export default function GoogleMaps({ lat, lng }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <h2>Calculating Locations..</h2>;
  }

  return (
    <>
      <GoogleMap
        center={{ lat: lat, lng: lng }}
        zoom={10}
        mapContainerStyle={{ width: "600px", height: "450px" }}
      >
        <Marker position={{ lat: lat, lng: lng }} />
        <Marker position={{ lat: lat, lng: lng }} />
      </GoogleMap>
    </>
  );
}
