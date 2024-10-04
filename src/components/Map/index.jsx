import React, { useEffect, useState } from "react";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
const containerStyle = {
  width: "600px",

  height: "600px",
};

// const center = {
//   lat: 20.80431760063241,
//   lng: 20.999627083539963,
// };

function Map({ position }) {
  const [center, setCenter] = useState({
    lat: position.latitude,
    lng: position.longitude,
  });
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBNWTvGcBUrMPokRH2BU6TzHZ84XwXf2gU",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    // setCenter({
    //   lat: position.latitude,
    //   lng: position.longitude,
    // });
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  console.log(position);

  useEffect(() => {}, []);

  return (
    <LoadScript googleMapsApiKey="AIzaSyBNWTvGcBUrMPokRH2BU6TzHZ84XwXf2gU">
      <GoogleMap
        mapContainerStyle={containerStyle}
        // onLoad={onLoad}
        onUnmount={onUnmount}
        center={{ lat: position.latitude, lng: position.longitude }}
        zoom={5}
      >
        <>
          <Marker
            position={{ lat: position.latitude, lng: position.longitude }}
            draggable={true}
            center
            //   onDragEnd={((e: MapMouseEvent) => void)}
          />
        </>
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map);
