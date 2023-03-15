import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import LocationMarker from './LocationMaker';

const icon = L.icon({
    iconUrl: require("../img/icon-location.png"),
    iconRetinaUrl: require("../img/icon-location.png"),
    iconSize: [30, 30],
});

export default function Maps() {
    return (
        <MapContainer center={[41.3858, 2.1301]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[41.3858, 2.1301]} icon={icon}>
              <Popup>
                  Ajuntament de BCN
              </Popup>
          </Marker>
          <LocationMarker />
        </MapContainer>
    )
} 