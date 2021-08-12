import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import Image from "next/image";
import EcoleCentre from "../../public/assets/centre.jpg";

const Map = () => {
  return (
    <MapContainer
      center={[31.65091282295619, -7.992069670452045]}
      zoom={10}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibW9oYW1lZGNoYXJhZmkiLCJhIjoiY2tzMGtpNTh0MGJjcTJwcGU1MjQ5djFtaCJ9.4tAXgYUg2QbVifXykYZOfw`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <Marker
        position={[31.65091282295619, -7.992069670452045]}
        draggable={true}
        animate={true}
      >
        <Popup>
          <div className="w-[180px] h-[210px]">
            <div className="w-full h-14">
              <img src="" alt="ss" />
            </div>
            ss
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
