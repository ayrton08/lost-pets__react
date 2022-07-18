import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import css from "./mapbox.css";
import { locationReport } from "../../lib/location";
import { useRecoilState } from "recoil";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXlydG9uMDgiLCJhIjoiY2wzeDZhZ2syMHk0NDNqbzJnbmxvazRiNCJ9.5zxk9KddYfSgjIPoEBz76A";

export function Mapbox() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-63.988684);
  const [lat, setLat] = useState(-31.497542);
  const [zoom, setZoom] = useState(6);

  const [locationUpdate, setlocationUpdate] = useState(false);
  const [markerLat, setMarkerLat] = useState();
  const [markerLng, setMarkerLng] = useState();
  const marker = useRef<any>(null);

  const [newLocation, setNewLocation] = useRecoilState(locationReport);

  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  }, [locationUpdate]);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });

  useEffect(() => {
    map.current.on("click", (e: any) => {
      var coordinates = e.lngLat;
      setNewLocation(coordinates);

      setMarkerLat(coordinates.lat);
      setMarkerLng(coordinates.lng);

      marker?.current?.remove();
      marker.current = new mapboxgl.Marker();
      marker.current.setLngLat(coordinates).addTo(map.current as any);
    });
  }, [locationUpdate]);

  const myLocation = (e) => {
    e.preventDefault();
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLng(position.coords.longitude);
        setLat(position.coords.latitude);
        setZoom(14);
        setlocationUpdate(!locationUpdate);
      });
    } else {
      console.log("Geolocation not avaliable");
    }
  };

  return (
    <div>
      <div ref={mapContainer} className={css.container} />
      <div className={css.sidebar}>
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <button onClick={myLocation} className={css.button}>
        Ir a mi ubicacion 🗺️
      </button>
    </div>
  );
}
