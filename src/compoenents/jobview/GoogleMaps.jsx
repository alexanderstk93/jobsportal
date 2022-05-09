import React, { useMemo } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export default function GoogleMaps({ lat, lng, showLocation }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const zoomLevel = showLocation ? 18 : 15;

  const center = useMemo(() => ({ lat: lat, lng: lng }), []);
  
  // Check if the google maps api was loaded.
  if (!isLoaded) {
    return <h2>Calculating Locations..</h2>;
  }

  return (
    isLoaded && (
      <>
        <GoogleMap
          center={center}
          zoom={zoomLevel}
          mapContainerStyle={{
            width: "370px",
            height: "320px",
            borderRadius: "1rem",
          }}
          options={""}
        >
          {/* The marker will not load if you put here from the first render, you have to load it conditionally by managing some state. */}
          {showLocation ? (
            <Marker
              position={center}
              icon={require("../assets/marker-64.png")}
            />
          ) : null}
        </GoogleMap>
      </>
    )
  );
}
