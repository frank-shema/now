import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css"
const Map = () => {
  useEffect(() => {
    // Create a Leaflet map instance
    // const map = L.map("map", {
    //   center: [-1.9485237, 30.1269267], // Initial map center
    //   zoom: 13, // Initial zoom level
    // });
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();
    
    // Add a base tile layer to the map (OpenStreetMap tiles)
    // L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //   attribution: "© OpenStreetMap contributors",
    // }).addTo(map);
    //   L.marker([-1.9485237, 30.1269267])
    //     .addTo(map)
    //     .bindPopup("SHDR")
    //     .openPopup();
  }, []);

  return <div id="map" className="map" style={{ height: "600px" }}></div>;
};

export default Map;
