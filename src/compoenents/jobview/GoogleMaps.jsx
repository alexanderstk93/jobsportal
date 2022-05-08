import React, { useMemo, useState } from "react";
import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

export default function GoogleMaps({ lat, lng, showLocation }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const zoomLevel = showLocation ? 18 : 15;

  const center = useMemo(() => ({ lat: lat, lng: lng }), []);

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
