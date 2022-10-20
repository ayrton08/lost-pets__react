import { useState, useEffect } from "react";

interface Location {
  lat: number;
  lng: number;
}

export function useLocation(): Location | {} {
  const [location, setLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  return location;
}
