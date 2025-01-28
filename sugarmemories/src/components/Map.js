import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

// Coordinates for "3 rue Chabeya cité Chekir route, Route Borj Touil, Tunisia"
const center = {
  lat: 36.8651, // Latitude
  lng: 10.2153, // Longitude
};

const Map = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.7348625417267!2d10.170980725216095!3d36.94450255955365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cdd052dbe841%3A0xf5ad84bde2781746!2sChez%20saby!5e0!3m2!1sar!2stn!4v1737548682027!5m2!1sar!2stn"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
