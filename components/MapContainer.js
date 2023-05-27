import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90vw",
  height: "400px",
};

const MapContainer = (props) => {
    console.log(props.lat)
  const center = {
    lat: props.lat,
    lng: props.long,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyCOOSKkkACIibkAV5tfh_PgDnoCwXMQpeE">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
