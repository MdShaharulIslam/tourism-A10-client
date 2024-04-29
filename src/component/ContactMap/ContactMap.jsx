import "leaflet/dist/leaflet.css"; // Import Leaflet CSS
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Navbar from "../Navber/Navber";

const ContactMap = () => {
  return (
    <div className="map-container" style={{ height: "50vh", width: "100%" }}>
      <div className="mx-8"> <Navbar></Navbar></div>
      <MapContainer
        center={[25.1061, 89.0236]} // Joypurhat coordinates: [latitude, longitude]
        zoom={14}
        scrollWheelZoom={true}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="shaharul islam"
        />
        <Marker position={[25.1061, 89.0236]}> {/* Joypurhat Marker */}
          <Popup>Joypurhat, Bangladesh</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default ContactMap;
