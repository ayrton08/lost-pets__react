import { useState, useEffect } from "react";
import { useLocation } from "./useLocation";

type ResponsePets = {
  objectID: string;
  pictureURL: string;
  name: string;
  raza: string;
  location: any;
  state?: string;
};

export function useResultsPets(): Array<ResponsePets> {
  const [resultsReports, setResultsReports] = useState(null);
  const location = useLocation();

  async function reportsClose(lat: string, lng: string) {
    if (lat && lng) {
      const response = await fetch(
        `https://dwf-m7-postgre.herokuapp.com/api/v1/pets/find-by-location?lat=${lat}&lng=${lng}`,
        {
          method: "get",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setResultsReports(data);
      return data;
    }
  }
  useEffect(() => {
    reportsClose(location["lat"], location["lng"]);
  }, [location]);

  return resultsReports;
}
