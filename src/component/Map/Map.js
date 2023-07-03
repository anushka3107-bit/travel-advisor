import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./map-style.css";

const Map = ({ coordinates, places }) => {
  console.log("places", places);
  return (
    <>
      <div className="map-outer">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCus2s57fzJ5AqfrPIQZ53hAtEfj-PdjZg" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={10}
          margin={[50, 50, 50, 50]}
          options={""}
        ></GoogleMapReact>
      </div>
    </>
  );
};

export default Map;
