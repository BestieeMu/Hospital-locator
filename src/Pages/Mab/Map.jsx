import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
// import "leaflet-routing-machine";
// import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.css";
// import "leaflet-control-geocoder/dist/Control.Geocoder.js";
// import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import "./map.css";

const Map = () => {
  const [position, setPosition] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [lan, setLan] = useState();
  const [lon, setLon] = useState();
  

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setPosition([position.coords.latitude, position.coords.longitude]);
        setLan(position.coords.latitude);
        setLon(position.coords.longitude);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  }, []);

  useEffect(() => {
    // const run_hospital_search_with_location_search_Value = () =>{

    // }
    const searchNearbyHospitals = async (latitude, longitude) => {
      const url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=hospital in lagos&format=json&limit=50&${latitude}&lon=${longitude}&zoom=18`;
      const response = await fetch(url);
      const hospitals = await response.json();
      setHospitals(hospitals);
      // use the hospitals' data to display markers on the map
    };
    searchNearbyHospitals(lan, lon);
  }, []);

  const Search = () => {
    fetch(
      // `https://nominatim.openstreetmap.org/search?q=${searchLocation}&format=geojson`
      `https://nominatim.openstreetmap.org/?addressdetails=1&q=${
        searchLocation
      }&format=json&limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosition([data[0]?.lat, data[0]?.lon]);
        setPlaceName(data[0].display_name);
      })
      .catch((error) => console.error(error));

    // Add this condition to check if the position is not null before rendering the map
    if (position === null) {
      return <p>Loading...</p>;
    }

    return null;
  };

  const onClickSearch = () => {
    Search();
    setSearchLocation("");
  };

  // Add this condition to check if the position is not null before rendering the map
  if (position === null) {
    return <p>Loading...</p>;
  }

  const icon = L.icon({
    iconUrl:
      "https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png",
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -38],
  });

  return (
    <>
      <div className="flex mt-14 flex-col-reverse input-group  lg:flex-row">
        {/* A floating group field where user can in his location to start searching */}
        <div className="px-3 flex flex-col  items-center w-full md:w-96">
          <div className="mt-5">
            <div className="flex flex-col gap-4 mt-5">
              <label className="flex flex-col gap-1">
                Your location:
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="w-72 rounded px-3 py-2 bg-gray-200  outline-none"
                  placeholder="e.g 23 ebene street"
                  required
                />
              </label>

              <button
                className="px-3 py-2 rounded font-medium "
                style={{ backgroundColor: "#5ecdff" }}
                onClick={onClickSearch}
              >
                Find Places Now
              </button>
            </div>
          </div>

          {/*////// any other informatin from the map is displayed here /////////// */}
          {/* <div className="w-full  mt-5">
            <h1>Your location is 5m away</h1>
          </div> */}
        </div>

        {/* map box */}
        <div className=" w-full bg-green-300 map-box">
          <MapContainer center={position} zoom={12} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>{placeName == "" ? "your location" : placeName}</Popup>
            </Marker>
            {hospitals.map((hospital) => (
              <Marker position={[hospital.lat, hospital.lon]} icon={icon}>
                <Popup>{hospital.display_name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Map;
