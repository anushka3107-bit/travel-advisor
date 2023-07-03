import React, { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { Icon, divIcon, point } from "leaflet";
import { getPlacesData } from "../api";

const customIcon = new Icon({
  iconUrl: require("../icons/maplogo.png"),
  iconSize: [38, 38],
});

const createClusterCustomIcon = function (cluster) {
  return new divIcon({
    html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
    className: "custom-marker-cluster",
    iconSize: point(33, 33, true),
  });
};

// const markers = [
//   {
//     geocode: [48.86, 2.3522],
//     popUp: "Hello, I am pop up 1",
//   },
//   {
//     geocode: [48.85, 2.3522],
//     popUp: "Hello, I am pop up 2",
//   },
//   {
//     geocode: [48.855, 2.34],
//     popUp: "Hello, I am pop up 3",
//   },
// ];

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  const [center, setCenter] = useState([0, 0]);

  useEffect(() => {
    const fetchPlacesData = async () => {
      try {
        const data = await getPlacesData();

        if (data) {
          setCenter([data.latitude, data.longitude]);
          setCoordinates([data.latitude, data.longitude]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlacesData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        height: "calc(100vh - 80px)",
      }}
    >
      <MapContainer
        center={center}
        zoom={13}
        style={{ flex: "1 1 50%", overflowY: "auto" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* <MarkerClusterGroup
          chunkedLoading
          iconCreateFunction={createClusterCustomIcon}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.geocode} icon={customIcon}>
              <Popup>{marker.popUp}</Popup>
            </Marker>
          ))}
        </MarkerClusterGroup> */}
      </MapContainer>
    </div>
  );
};

export default Map;
